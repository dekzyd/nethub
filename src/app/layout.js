import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "../../components/Context";
import dynamic from "next/dynamic";

// lazy load component & libraries
// const { Slide, ToastContainer } = dynamic(() => import("react-toastify"));
const Navbar = dynamic(() => import("../../components/Navbar"));
const Footer = dynamic(() => import("../../components/Footer"));
const SideMenu = dynamic(() => import("../../components/SideMenu"));

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
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
