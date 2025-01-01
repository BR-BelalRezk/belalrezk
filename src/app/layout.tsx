import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ActiveSection from "@/context/ActiveSection";
import Lenis from "@/components/ui/Lenis";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Belal Rezk",
  description: "Front-End Developer",
  icons: {
    icon: "/belal.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollbarWidth: "none" }}>
      <Lenis>
        <body
          className={`${archivo.variable} font-archivo antialiased overflow-x-hidden bg-stone-200 text-stone-900`}
        >
          <ActiveSection>
            <Header />
            <main>{children}</main>
          </ActiveSection>
          <Footer />
        </body>
      </Lenis>
    </html>
  );
}
