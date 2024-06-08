import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Saransh Portfolio",
  description: "Designed with 💓 by Saransh Gautam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
      <PageTransition>
        <Header/>
        <StairTransition/>
        {children}
      </PageTransition>
      </body>
    </html>
  );
}
