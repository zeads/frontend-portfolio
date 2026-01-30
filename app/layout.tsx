import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Opsional: gunakan jika ingin menggunakan CSS variable
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Sesuaikan bobot yang dibutuhkan
});

export const metadata: Metadata = {
  title: "Ruri Pelinandang Portfolio",
  description: "Portfolio Ruri Pelinandang fullstack developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className="dark">
    <html lang="en" className={`light scroll-smooth ${poppins.className}`}>
      <body
        className={` antialiased bg-slate-50 text-slate-900`}
        cz-shortcut-listen="true"
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow pt-20 container mx-auto sm:px-6 lg:px-8 xl:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
