This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Creating Next App
====================
```bash
npx create-next-app@latest portfolio --typescript --eslint
cd portfolio
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


Styling 
====================

## Step1 : Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## Step2 : Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Step3 : Add the Tailwind directives to your CSS
Add the @tailwind directives for each Tailwind’s layers to your globals.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Step5 : Start/Restart your build
```bash
npm run dev
```



Framer Motion
=============
Is a production-ready motion library for React that provids nice animations to components
## Installation
```bash 
npm i framer-motion
```
## Usage
```
import { motion } from 'framer-motion'
type Props = {}
export default ComponentName = ({}:Props)=>{
          <motion.div>
          // your code
          </motion.div>
}
``` 