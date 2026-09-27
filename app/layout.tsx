import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import EasterEgg from "./Components/EasterEgg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mounir Lbath",
    template: "%s | Mounir Lbath",
  },
  description:
    "Mounir Lbath, student researcher at École Polytechnique working on geometry and machine learning: shape correspondence, spectral methods and 3D vision.",
  openGraph: {
    title: "Mounir Lbath",
    description:
      "Student researcher at École Polytechnique working on geometry and machine learning.",
    type: "website",
  },
};

// Runs before first paint to avoid a flash of the wrong theme.
// Uses the saved choice if any, otherwise the system preference.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <NavBar />
        {/* Clips decorative background circles at the page edges */}
        <div className="overflow-clip">
          <main className="mx-auto max-w-3xl px-5 pt-24 pb-10">{children}</main>
          <Footer />
        </div>
        <EasterEgg />
      </body>
    </html>
  );
}
