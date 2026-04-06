import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "단디소프트 | AI 기반 엔터프라이즈 솔루션 HERA",
  description:
    "단디소프트는 AI 기반 엔터프라이즈 플랫폼 HERA를 개발합니다. 데이터 관리, 업무 자동화, 커뮤니티 플랫폼을 하나로 통합하는 지능형 솔루션을 제공합니다.",
  keywords: [
    "HERA",
    "엔터프라이즈 솔루션",
    "AI 에이전트",
    "업무 자동화",
    "단디소프트",
    "MSA 플랫폼",
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
