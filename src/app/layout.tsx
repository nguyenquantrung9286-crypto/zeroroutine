import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Ноль Рутины | ИИ-интегратор для малого бизнеса",
  description: "Внедряем ИИ-решения, которые убирают рутину из бизнеса. Сокращение ФОТ, удержание 20% заявок и автоматизация административных процессов за 1–3 дня.",
  openGraph: {
    title: "Ноль Рутины — Попрощайтесь с операционкой",
    description: "Автономные ИИ-администраторы для вашего бизнеса. Окупаемость с первого месяца.",
    type: "website",
    locale: "ru_RU",
  },
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
