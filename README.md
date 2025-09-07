# ALX Listing App

The **ALX Listing App** is a modern web application inspired by Airbnb, designed to provide a clean and scalable foundation for building a property listing page.  
This project is part of the ALX Intermediate Frontend program and focuses on scaffolding the initial setup using **Next.js, TypeScript, TailwindCSS, and ESLint**.

---

## 🚀 Project Goals
- Build a scalable and maintainable **Airbnb clone listing page**.
- Implement **TypeScript** for type safety and code robustness.
- Use **TailwindCSS** for responsive and modern styling.
- Ensure clean and readable code using **ESLint**.
- Establish a reusable and professional **project structure**.

---

## 📂 Project Structure

```bash
alx-listing-app/
│
├── pages/               # Next.js pages (uses the Pages Router)
│   └── index.tsx        # Main entry point (home page)
│
├── components/          # Reusable UI components
│   └── common/
│       ├── Card.tsx     # Card component for property listings
│       └── Button.tsx   # Button component for actions
│
├── interfaces/          # TypeScript interfaces
│   └── index.ts         # Interfaces like CardProps, ButtonProps
│
├── constants/           # Project constants
│   └── index.ts         # API URLs, configuration, static text
│
├── public/              # Publicly accessible assets
│   └── assets/          # Images, SVGs, and other static files
│
├── styles/              # Global and Tailwind styles
│   └── globals.css      # Tailwind base, components, and utilities
│
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
