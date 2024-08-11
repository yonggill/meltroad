import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@css/tailwind.css"
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "yong-yong.net",
  description: "스타트업 개발자의 개발, 스타트업, 음식 이야기",
};
export default function RootLayout({ children } : {children:any}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
