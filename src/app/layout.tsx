import "../styles/global.scss";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Work_Sans, Fira_Mono } from "next/font/google";

const inter = Work_Sans({ subsets: ["latin"] });
const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
});

export const metadata: Metadata = {
  title: "Masoud Poorghaffar Aghdam",
  description: "Masoud's personal website :D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${firaMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
