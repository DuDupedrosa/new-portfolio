import './globals.css';
import 'keen-slider/keen-slider.min.css';
import 'animate.css';
import '../style/pagination.css';
import NextTopLoader from 'nextjs-toploader';

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
      <body className="font-opens-sans">
        <NextTopLoader color="#ea580c" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
