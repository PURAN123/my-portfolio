import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Puran Chandra — Full-Stack Engineer",
  description:
    "Full-stack Software Engineer with 4+ years of experience in Django, Django Rest Framework, Next.js, Vue.js, GraphQL and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${syne.variable} font-mono bg-[#080c08] text-[#d4e8d4] antialiased overflow-x-hidden`}
      >
        {/* Scanline overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
          }}
        />
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
