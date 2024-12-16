import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ibidapo Ayomide Victor",
  description: "Explore Ibidapo Ayomide's professional portfolio, featuring his top projects and expertise in full stack development, UI/UX design, and innovative web solutions",
  keywords: [
    "nextjs",
    "react",
    "Javascript",
    "Ibidapo Ayomide Victor",
    "Victor",
    "Software engineer",
    "Frontend Developer"
  ],
  authors: [
    {
      name: "Ibidapo Ayomide Victor"
    }
  ],
  creator: "Ibidapo Ayomide Victor"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
