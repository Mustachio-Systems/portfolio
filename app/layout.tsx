import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 THIS IS THE "UNIQUE" PART
export const metadata: Metadata = {
  title: {
    // The %s is automatically replaced by the title exported in each page
    template: "%s | Mustachio Systems",
    default: "Mustachio Systems | Executive Engineering", // The fallback for the homepage
  },
  description: "Executive engineering for the modern web. Full-stack architecture and automation.",
  icons: {
    icon: '/icon.png', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // 👇 ADDED: Global dark theme colors and selection color (the "Flow")
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-300 selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}