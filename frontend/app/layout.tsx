import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@css/tailwind.css"
import { Metadata } from 'next';
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import "./globals.css";


export const metadata: Metadata = {
  title: "용 블로그",
  description: "스타트업 개발자의 개발, 스타트업, 음식 이야기",
};
export default function RootLayout({ children }: { children: any }) {

  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
