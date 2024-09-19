This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/**`. The page auto-updates as you edit the file.

## Prerequisites
- [Node](https://nodejs.dev/) v20^
- [Next](https://nextjs.org/) v14^
- [React](https://reactjs.org/) v18
- [Tailwind](https://tailwindcss.com/) to use preset styles
- [Contentful](https://www.npmjs.com/package/contentful) CMS
- [Vercel](https://vercel.com/quantasy-associates/ballmer-group-web) Deployments and Domains

## Compiling css
- Styles written using the library [Tailwindcss](https://tailwindcss.com/).
- When you run **yarn dev**, the styles are compiled **automatically**. no need to use bash compiler.
- If you need to use a custom **class**, you can add it to the **main.css**, or use [@layer](https://tailwindcss.com/docs/adding-custom-styles).


## Deploy on Vercel
The easiest way to deploy a Next project through [Vercel](https://vercel.com/quantasy-associates).

## API connection
The main connection is located in the **/src/app/api/contentful** folder.

**Client.js** needed for authentication and creating a connection with Сontentfull.

**Fetcher.js** needed to get all Entry from Contentfull.

### Important API hooks
In the **src/app/hooks/api** folder:

    - useContentful.js (the main file for fatching caching and revalidation data from the contentful).
    - useRichText.js (main function, for parsing rich-text from contentful).

The **src/hooks/ui** folder contains all the main functions for obtaining data for each page.
