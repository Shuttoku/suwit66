import "./globals.css";
import { KoHo } from "next/font/google";

const koHo = KoHo({ subsets: ["latin"],weight: ["400","700"] });

export const metadata = {
  title: "วรรณกรรมไทย",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" href="./upload/TheMoon.png" />
      </head>
      <body className={koHo.className}>{children}</body>
      
    </html>
  );
}
