# Social messenger app

A [social messenger app](https://social-messenger-app.vercel.app/) created using Next 13, Tailwind, Prisma, MongoDB and Pusher.

### Key Features:
- Real-time messaging
- Individual messaging and Group chats
- Message read receipts
- Message attachments
- Online/Offline user status
- Customizable User Profiles and Settings
- Google authentication integration
- Github authentication integration
- Full responsiveness for all devices

### List of utilized technologies:
- **Typescript** – for type safe development
- **Next 13** – for server communication and routing
- **next-auth** – for user authentication via credentials
- **next-cloudinary** – for loading avatars and message attachments
- **React** – for component based UI development
- **react-hook-form** – for handling forms and validation
- **react-hot-toast** – for handling form error messages
- **react-icons** – used icons pack
- **react-select** – for select component in group creation functionality
- **react-spinners** – for handling UI of loading state
- **TailwindCSS** – for sleek and responsive UI
- **Headless UI** – for accessible UI components
- **Prisma** – as an ORM for database communication
- **Pusher** – for real-time messages updates
- **Zustand** – for managing user status state
- **axios** – for handling API requests
- **bcrypt** – for hashing passwords
- **clsx** – for handling dynamic CSS classes

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/vitaliygosteev/socal_messenger_app
```

### Install packages
```shell
npm i
````

### Setup .env file

```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
