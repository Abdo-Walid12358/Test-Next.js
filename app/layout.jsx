import "./globals.css";
import { Inter } from "next/font/google";
import ToggleMode from "@/components/toggleMode/toggleMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "مشروع تعليمي",
  description: "مشروع تعليمي"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="icon" href="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" />
      </head>
      <body className={inter.className}>
        {children}
        <ToggleMode />
      </body>
    </html>
  );
}
