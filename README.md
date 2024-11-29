This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Update the Resume

1. Convert PDF to PNG: [PDF2PNG](https://pdf2png.com/)

2. Edit Image in Photoshop. Project located at `D:\Cosmos\PhotoSpace\PS\Portfolio\CV.psd`

3. #DEPRECATED - (Resize within AdobePS) Scale down PNG: [ResizePNG](https://onlinepngtools.com/resize-png)     Target: 999 x 2536

4. Compress PNG [compresspng](https://compresspng.com/)     Target: ~500kb

5. Rename png to `cv-redacted-md-min.png` and copy to `/public` folder

6. Copy PDF to `/public` folder, update the PDF file name in `BentoGrid.tsx at handleDownload(){}`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
