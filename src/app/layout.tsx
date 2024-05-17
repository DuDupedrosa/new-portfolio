import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';

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
        <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-opens-sans">{children}</body>
    </html>
  );
}
