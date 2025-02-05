import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import TopBar from "../../../components/share/TopBar";
import LeftSibar from "../../../components/share/LeftSibar";
import RightSibar from "../../../components/share/RightSibar";
import BottonBar from "../../../components/share/BottonBar";

export const metadata: Metadata = {
  title: "Create Socioal App",
  description: "This a socioal media app",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  if (!user) {
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
  return (
    <>  
    <html lang='en'>
        <ClerkProvider>
            <body>
                <main className={ `${inter.className}` }>
                    <TopBar />
                    
                    <main className='flex'>
                        <LeftSibar />
                        <section className='main-container'>
                            <div className='w-full max-w-4xl'>
                            { children }
                            </div>
                        </section>
                        <RightSibar />
                    </main>
                </main>
            </body>
        </ClerkProvider>
        

    </html>
</>
  );
}
