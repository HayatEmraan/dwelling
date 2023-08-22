import AuthContext from "@/context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwelling | BrightCoders",
  description: "A project by BrightCoders team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>{children}</AuthContext>
        <Toaster />
      </body>
    </html>
  );
}
