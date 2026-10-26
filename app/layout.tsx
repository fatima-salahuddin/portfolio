import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { resumeData } from "@/app/data/resume";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", axes: ["opsz"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

const { profile } = resumeData;

export const metadata: Metadata = {
    title: { default: `${profile.name}, ${profile.role}`, template: `%s · ${profile.name}` },
    description: profile.intro,
    openGraph: { title: `${profile.name}, ${profile.role}`, description: profile.intro, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
