import type { Metadata } from "next";
import "../src/app/globals.css";
import { ThemeProvider } from "@/theme/ThemeContext";

export const metadata: Metadata = {
  title: "Michael Gallegos | Systems Engineer · AI Product Builder",
  description: "A systems engineering portfolio covering full-stack software, AI products, developer tools, embedded systems, robotics, and product design.",
  keywords: ["systems engineer", "full-stack developer", "AI product builder", "embedded systems", "robotics", "Next.js"],
  authors: [{ name: "Michael Gallegos" }],
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
