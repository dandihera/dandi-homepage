import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "단디소프트 | AI 기반 엔터프라이즈 솔루션",
  description:
    "단디소프트는 AI 기반 엔터프라이즈 플랫�� HERA를 개발하는 소프트웨어 기업입니다. 인사관리, 워크플로우, 시스템 관리를 하나의 플랫폼으로 제공합니다.",
  keywords: ["단디소프트", "HERA", "엔터프라이즈", "AI", "HRM", "워크플로우"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
