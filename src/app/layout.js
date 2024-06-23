import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
   default: "Yusufs House",
   template: '%s | Welcome To My World'
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
       <div className=""> {children}</div>
        <footer className="bg-amber-500">Yoo This Yusufs House Footer</footer>
        </body>
    </html>
  );
}
