import "../styles/global.scss";
import type {Metadata} from "next";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Work_Sans} from "next/font/google";

const inter = Work_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Masoud Poorghaffar Aghdam",
    description: "Masoud's personal website :D",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
