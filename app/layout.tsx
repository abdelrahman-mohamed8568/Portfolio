import type { Metadata } from "next";
import "./styles/globals.css";
import { font1 } from "@/public/fonts/font";
import Navbar from "./components/navbar/navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
