import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen antialiased bg-gray-200", inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
