import "./globals.css";
import { Nunito, Lato } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "EduVoice",
  description: "Plataforma  moderna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
