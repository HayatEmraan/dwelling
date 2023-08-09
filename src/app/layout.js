import HeaderComponent from "@/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwelling | BrightCoders",
  description: "A project by BrightCoders team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
