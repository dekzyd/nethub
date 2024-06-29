import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ThemeModeScript } from "flowbite-react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Nethub",
  description: "Nethub Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <head>
          <ThemeModeScript />
        </head>
      </head>
      <body>
        <main className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
          <div className="w-full max-w-[1140px] bg-slate-700 my-0 mx-auto"></div>
        </main>
      </body>
    </html>
  );
}
