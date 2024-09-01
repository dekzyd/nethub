import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ThemeModeScript } from "flowbite-react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "../../components/Context";
import SideMenu from "../../components/SideMenu";

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
      <head>
        {/* <ThemeModeScript /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className="">
          <AppProvider>
            <ToastContainer
              autoClose={2500}
              transition={Slide}
              hideProgressBar={true}
            />
            <SideMenu />
            <Navbar />
            {children}
            <Footer />
            <div className="w-full max-w-[1140px] bg-slate-700 my-0 mx-auto"></div>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
