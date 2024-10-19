import type { Metadata } from "next";

import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Project Management",
  description: "Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
