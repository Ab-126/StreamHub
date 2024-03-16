# StreamHub

StreamHub is a platform that users to stream live content, interact with viewers, and build communities around shared interests. It leverages modern technologies to offer a seamless and engaging streaming experience, with multiple functionality like
- Live Streaming
- Connecting it to any streaming software like Obs Studio
- Live Chatting
- Slowed Comments 
- Only Followers can comment
- Follow and Unfollow users
- Block and Unblock users
- View as a guest
- Unique color of message for every user

## Features

- **Next.js 14**: Utilizing the latest version of Next.js for efficient and performant React applications.
- **Clerk Authentication**: Integration with Clerk for secure user authentication.
- **LiveKit**: Integration for live streaming, group audio, and video calls.
- **ShadCn**: UI components for a consistent and visually appealing design.
- **UploadThing**: Library for handling file uploads.
- **Date-fns**: Utility library for date and time manipulation.
- **JWT-decode**: Library for decoding JWT tokens.
- **Query-string**: Library for parsing and stringify URL query strings.
- **Sonner**: Library for managing audio streaming.
- **Svix**: Library for secure webhook signatures.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and clean user interfaces.
- **TypeScript**: Adding static typing to enhance development productivity and code quality.
- **UseHooks**: Custom React hooks for common functionalities.
- **UUID**: Library for generating unique identifiers.
- **Zustand**: State management for maintaining application state.
- **Prisma**: Modern database toolkit for TypeScript and Node.js.
- **CockroachDB**: Distributed SQL database for global, internet-scale applications.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/streamhub.git
cd streamhub
```
Install necessary Dependencies:
``` bash
npm install
```

Set up environment variables:

Create a **.env** file based on .env.example and fill in the required variables.

Run the migrations:

```bash
npx prisma migrate dev --name init
```

Start the server:

```bash
npm run dev
```

### Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any features, bugs, or suggestions.

License
This project is licensed under the MIT License.