import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/fonts.css";
import SmoothScroll from "../providers/smooth-scroll";

export const metadata: Metadata = {
  title: "Suff You Are Looking For",
  description:
    "All of your required materials and teachers recommended books are here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col ">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
