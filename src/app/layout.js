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
    <html lang="en" className="scroll-smooth">
      <head>{/* <ThemeModeScript /> */}</head>
      <body>
        <main className="">
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
