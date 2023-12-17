# EventTribe

This is a free app for you to plan your events.

## Getting Started

First, clone this repo to a directory using the command

```bash
git clone https://github.com/josephopio11/eventsapp.git

```

Install all the dependencies using `npm i` or `yarn`.

Create a mongodb database and connect your app to the database by entering the information in the environment file

Create a `.env.local` file and add all the required environment variables using the template below:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=************************************
CLERK_SECRET_KEY=**************************************

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URI=*****************************
```

You can then run the development server: using

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
