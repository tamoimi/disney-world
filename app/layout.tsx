import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney web for HB",
  description: "Everything about Disney characters 👸, built by Tami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={montserrat.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
