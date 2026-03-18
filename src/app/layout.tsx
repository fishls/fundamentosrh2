import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RehabStudio | Fundamentos de Rehabilitación",
  description: "Plataforma educativa interactiva de rehabilitación física.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} dark`}>
      <body className="font-sans min-h-screen flex flex-col relative">
        {/* Background Decorative Elements */}
        <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <main className="flex-1 flex flex-col z-10 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
