import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@/components/google";
import Hello from "@/components/hello";
import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import config from "@/config";
import { roboto } from "./font";
import { WebVitals } from "@/components/web-vitals";
import { ProgressBar } from "@/components/progress-bar";

import "./globals.css";

const {
  title, description,
  author, keywords,
  googleAnalyticId, googleTagManagerId,
  openGraph,
} = config;

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
  },
  manifest: '/manifest.webmanifest',
  twitter: {
    card: "summary_large_image",
    title: "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast",
    description:
      "I'm Chun-Ho (Hugo) Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
    images: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/logo192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${roboto.className}`}>

      <WebVitals />
      <body>
        <ProgressBar className="fixed top-0 h-1 bg-yellow-500" >
          <Hello />
          <main>
            <SideBar />
            <div className="main-content">
              <NavBar />
              {children}
            </div>
          </main>
        </ProgressBar>
      </body>
      <GoogleAnalytics gaId={googleAnalyticId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}

export default RootLayout
