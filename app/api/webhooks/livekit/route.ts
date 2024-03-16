import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

const reciever = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = headers();
  const authorization = headerPayload.get("Authorization");

  if (!authorization) {
    return new Response("No authorization header", { status: 400 });
  }

  const event = reciever.receive(body, authorization);

  if (event.event === "ingress_started") {
    console.log("Ingress Started");

    await db.stream.update({
      where: {
        ingressId: event.ingressInfo?.ingressId,
      },
      data: {
        isLive: true,
      },
    });
  }

  if (event.event === "ingress_ended") {
    console.log("Ingress Ended");

    await db.stream.update({
      where: {
        ingressId: event.ingressInfo?.ingressId,
      },
      data: {
        isLive: false,
      },
    });
  }

  return NextResponse.json({ success: true });
}
