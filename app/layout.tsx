import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MY Sports Injury | Leading Physiotherapy Clinic in Manchester",
  description: "Expert physiotherapy, chiropractic & sports rehabilitation in Manchester City Centre. HCPC & CSP accredited. Book online.",
  icons: {
    icon: "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/cropped-My-Sports-Injury-FavIcon-270x270.jpg",
  },
  openGraph: {
    title: "MY Sports Injury | Leading Physiotherapy Clinic in Manchester",
    description: "Expert physiotherapy, chiropractic & sports rehabilitation in Manchester City Centre. HCPC & CSP accredited. Book online.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
