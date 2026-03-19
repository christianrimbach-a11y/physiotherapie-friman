import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Physiotherapie Frimann | Ihre Praxis für Bewegung und Gesundheit",
    template: "%s | Physiotherapie Frimann",
  },
  description:
    "Physiotherapie Frimann – professionelle Behandlungen, Manuelle Therapie, Stoßwellentherapie und mehr. Termin vereinbaren.",
  openGraph: {
    locale: "de_DE",
  },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={montserrat.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
