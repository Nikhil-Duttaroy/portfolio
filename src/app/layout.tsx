import type { Metadata, Viewport } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const Fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Duttaroy",
  description: "Nikhil Duttaroy's Portfolio website as a Software Developer",
  keywords: [
    "Nikhil Duttaroy",
    "Nikhil",
    "Duttaroy",
    "Software Developer",
    "Front End Developer",
    "Portfolio",
    "Website",
    "Personal Website",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
  ],
  openGraph: {
    title: "Nikhil Duttaroy",
    description: "Nikhil Duttaroy's Portfolio website",
    type: "website",
    url: "https://www.nikhilduttaroy.com",
    siteName: "Nikhil Duttaroy",
    //get a hosted image and add it here
    // images: [
    //   {
    //     url: "dummy image",
    //     width: 800,
    //     height: 600,
    //     alt: "Nikhil Duttaroy",
    //   },
    // ],
    locale: "en_IN",
  },
};

const Viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fira.className} ${geistSans.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
