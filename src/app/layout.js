import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import SparkleCursor from "@/components/SparkleCursor";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy Birthday ❤️",
  description: "A special surprise for my love",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary-pink selection:text-white">
        <SparkleCursor />
        <FloatingHearts />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
