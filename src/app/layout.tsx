import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Meme Generator",
  description: "Upload an image, get funny AI-generated captions!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
          className="bg-gray-50 text-gray-700 font-sans">
        {/*className={`${geistSans.variable} ${geistMono.variable} antialiased`}>*/}
        {children}
      <footer className="text-center p-4 text-gray-500">© 2025 MemeBot</footer>
      </body>
    </html>
  );
}
