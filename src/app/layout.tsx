import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar/Navbar";
import NextAuthProvider from "./_components/SessionProvider";
import { getServerAuthSession } from "~/server/auth";
import { Toaster } from "react-hot-toast";
import NavbarToggle from "./_components/navbar/NavbarToggle";
import { Provider } from "jotai";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Shopping App",
  description: "A mock app for users to simulate an excellent shoppig experience.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerAuthSession()

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Provider>
          <NextAuthProvider session={session}>
            <Navbar />
            <NavbarToggle />
            <Toaster position="bottom-right" />
            {children}
          </NextAuthProvider>
          </Provider>

        </TRPCReactProvider>
      </body>
    </html>
  );
}
