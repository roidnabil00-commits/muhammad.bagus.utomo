import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-bagus-utomo.vercel.app"),
  title: "Muhamad Bagus Utomo | Dari Nol, Beneran.",
  description:
    "Lulusan SD yang membuktikan bahwa latar belakang bukan penentu masa depan. Mentor bisnis, entrepreneur, dan partner perjalananmu menuju kebebasan finansial.",
  keywords:
    "Bagus Utomo, mentor bisnis, mentoring intensif, wirausaha muda, bisnis dari nol",
  openGraph: {
    title: "Muhamad Bagus Utomo | Dari Nol, Beneran.",
    description:
      "Bukan teori dari buku. Tapi pelajaran dari luka, jatuh, dan bangkit sendiri.",
    type: "website",
    url: "https://muhammad-bagus-utomo.vercel.app",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banner Muhamad Bagus Utomo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}