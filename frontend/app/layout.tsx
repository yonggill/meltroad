import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bentofolio - Bootstrap Personal Portfolio React NextJs Template",
  description: "Generated by bentofolio - Bootstrap Personal Portfolio React NextJs Template",
};
export default function RootLayout({ children } : {children:any}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
