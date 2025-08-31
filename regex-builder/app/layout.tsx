import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Regex Generator",
  description: "AI-powered regex generator using LLaMA 3 (Ollama)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
