import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import CustomCarousel from "./Components/CustomCarousel";
import { Suspense } from "react";
import Loading from "./loading";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manish Basnet - Frontend Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CustomCarousel />

        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
