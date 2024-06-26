import './globals.css';
import 'keen-slider/keen-slider.min.css';
import 'animate.css';
import '../style/pagination.css';
import '../style/looper-slider.css';
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from 'next';
import { appDefaultMetadata } from '@/config/app-config';

export const metadata: Metadata = { ...appDefaultMetadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Opens Sans - font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          cross-origin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          cross-origin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins">
        <NextTopLoader color="#ea580c" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
