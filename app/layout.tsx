import type { Metadata } from "next";

import Footer from "@/components/navigation/footer";
import Header from "@/components/navigation/header";
import Container from "react-bootstrap/Container";

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
        <Header />
        <main>
          <Container className="my-5" style={{ minHeight: "calc(100vh - 256px)" }}>
            <Providers>{children}</Providers>
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
