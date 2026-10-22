import type { Metadata } from "next";
import "../src/app/globals.css";
import { ThemeProvider } from "@/theme/ThemeContext";

export const metadata: Metadata = {
  title: "Michael — Multi-Disciplinary Engineer",
  description: "Engineering portfolio: software, embedded, robotics, AI, CAD, 3D printing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
