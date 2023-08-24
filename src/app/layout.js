import AuthContext from "@/context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import NProgressComponent from "@/components/shared/nprogress/nprogress";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwelling | BrightCoders",
  description: "A project by BrightCoders team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="./node_modules/preline/dist/preline.js" />
        <NProgressComponent />
        <AuthContext>{children}</AuthContext>
        <Toaster />
      </body>
    </html>
  );
}
