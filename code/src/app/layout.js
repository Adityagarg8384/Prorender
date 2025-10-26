import { Inter } from "next/font/google";
import "./globals.css";
// import { SessionProvider } from "next-auth/react";
// import CheckWallet from "@/components/checkWallet";
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pro Care",
  description: "Ai assistance for health diagnosis ,medication",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.png" />
      {/* <SessionProvider>
        <CheckWallet> */}
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="lights"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <div>
            <Navbar />
            <ToastContainer />
            <div className=" antialiased  font-sans ">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
