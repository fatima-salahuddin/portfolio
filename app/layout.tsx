import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean, professional look
import "./globals.css"; // Ensure this import is correct based on where we saved globals.css
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { resumeData } from "@/app/data/resume";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${resumeData.profile.name} | ${resumeData.profile.role}`,
  description: resumeData.profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
