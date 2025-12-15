import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../../public/christmas-font.otf",
});

export const metadata: Metadata = {
  title: "Christmas 2025",
  description: "Christmas 2025 quiz to see the final present",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="bg-slate-200">
          <div className="max-w-300 mx-auto bg-xmas-green h-screen w-screen px-4 pt-12 text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
