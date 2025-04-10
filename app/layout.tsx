import type { Metadata } from "next";
import "./styles/globals.css";
import { font1 } from "@/public/fonts/font";
import Navbar from "./components/navbar/navbar";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font1}>
        <ReactLenis root />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
