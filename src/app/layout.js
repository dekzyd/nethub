import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nethub",
  description: "Nethub Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
