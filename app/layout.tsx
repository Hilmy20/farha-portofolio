import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farha Arpegias Fadhail Kawakib | Student Portfolio",
  description: "Portfolio of Farha Arpegias Fadhail Kawakib, an Accounting and Dutch Literature student.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
