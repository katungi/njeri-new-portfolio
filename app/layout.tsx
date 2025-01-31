import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "Njeri Wanjama - Communications and PR expert",
  description: "I am a Communications and PR expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
