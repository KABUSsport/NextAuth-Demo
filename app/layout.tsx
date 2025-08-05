import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextAuth Demo - Home",
  description: "Welcome to the Next.js authentication demo with NextAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f3e8ff] to-[#fdf2f8] text-slate-900`}
  >

     {/* GitHub Ribbon */}
     <a
          href="https://github.com/MiladJoodi/NextAuth-Demo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            border: 0,
            zIndex: 1000,
          }}
        >
          <Image
            src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png"
            alt="Fork me on GitHub"
            width={149}
            height={149}
            priority={false}
          />
        </a>


        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
