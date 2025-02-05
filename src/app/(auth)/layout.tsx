import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Create Socioal App",
  description: "This a socioal media app",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <main className={`${inter.variable} `}>
            <div className="flex flex-col w-full min-h-screen items-center justify-center">
              {children}
            </div>
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
