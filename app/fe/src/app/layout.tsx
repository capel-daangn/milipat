import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const nanumSquareNeo = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareNeoTTF-bRg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareNeoTTF-cBd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "MiliPat | 방산분야 특허 검색 및 대응 관리를 위한 지능형 플랫폼",
  description: "방산분야 특허 검색 및 대응 관리를 위한 지능형 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${nanumSquareNeo.className} min-h-[720px] min-w-[1200px]`}
    >
      <body>{children}</body>
    </html>
  );
}
