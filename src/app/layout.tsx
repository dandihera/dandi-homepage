import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "단디소프트 | AI 에이전트 전문 소프트웨어 기업",
  description:
    "한국 시장에 특화된 AI 에이전트 기술과 업무 자동화 솔루션을 제공하는 단디소프트입니다.",
  keywords: [
    "AI 에이전트",
    "업무 자동화",
    "Claude Code",
    "한국 AI",
    "소프트웨어 개발",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
