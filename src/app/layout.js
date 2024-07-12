// import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ThemeModeScript } from "flowbite-react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Nethub",
  description: "Nethub Technologies",
  icons: {
    icon: "../favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <main className="min-h-screen">
          <ToastContainer
            autoClose={2500}
            transition={Slide}
            hideProgressBar={true}
          />
          <Navbar />
          {children}
          <Footer />
          <div className="w-full max-w-[1140px] bg-slate-700 my-0 mx-auto"></div>
        </main>
      </body>
    </html>
  );
}
