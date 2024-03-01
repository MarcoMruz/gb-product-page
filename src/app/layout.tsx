import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GymBeam - Sports nutrition",
  description: "GymBeam - Sports nutrition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classes = `antialiased text-gray-900 bg-white dark:bg-gray-900 dark:text-white ${inter.className}`;

  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  );
}
