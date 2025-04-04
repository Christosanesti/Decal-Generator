import type { Metadata } from "next";
import { Comic_Neue, Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../components/home/Navbar/ResponsiveNav";
import { Toaster } from "sonner";
const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const comic = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punk decal generator",
  description: "Generates punk and rock decals using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comic.className} ${roboto.className} bg-cyan-900 antialiased`}
      >
        <ResponsiveNav />
        {children}

        <Toaster richColors />
      </body>
    </html>
  );
}
