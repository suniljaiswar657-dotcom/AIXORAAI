import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AIXORA AI — One Platform. Limitless AI Possibilities.",
    template: "%s | AIXORA AI"
  },
  description:
    "A unified AI workspace for chat, writing, research, documents and creative productivity.",
  applicationName: "AIXORA AI",
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090b10"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}