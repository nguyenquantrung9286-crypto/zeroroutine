import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fbf9f8",
};

export const metadata: Metadata = {
  title: "Ноль Рутины | ИИ-интегратор для малого бизнеса",
  description: "Внедряем ИИ-решения, которые убирают рутину из бизнеса. Сокращение ФОТ, удержание 20% заявок и автоматизация административных процессов за 1–3 дня.",
  keywords: ["ии интегратор", "внедрение ии", "ии для бизнеса", "ии администратор", "сокращение фот", "автоматизация заявок"],
  authors: [{ name: "Ноль Рутины" }],
  alternates: {
    canonical: "https://zeroroutine.ru",
  },
  openGraph: {
    title: "Ноль Рутины — Попрощайтесь с операционкой",
    description: "Автономные ИИ-администраторы для вашего бизнеса. Окупаемость с первого месяца.",
    url: "https://zeroroutine.ru",
    siteName: "Ноль Рутины",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ноль Рутины | ИИ-интегратор",
    description: "Внедряем ИИ-решения, которые убирают рутину из бизнеса. Сокращение ФОТ и удержание заявок.",
    creator: "@zeroroutinesbot",
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
