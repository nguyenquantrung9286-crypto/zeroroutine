import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Ноль Рутины | ИИ-агенты для бизнеса",
  description: "Внедрение ИИ-агентов в бизнес. Заменяем рутинные должности и сокращаем ФОТ благодаря ИИ-администраторам, HR-ботам и умному управлению репутацией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed antialiased`}>
        {children}
      </body>
    </html>
  );
}
