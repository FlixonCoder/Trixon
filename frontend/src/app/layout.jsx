import { Manrope } from 'next/font/google';
import './globals.css';
import AppLayout from '../components/AppLayout';
import Script from 'next/script';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Fractional CTO for Startups | Build-Operate-Transfer | Trixon',
  description: 'Trixon is an independent technical partner for early-stage, non-technical founders. Direct access to the person writing your code — architecture, MVP builds, and full IP transfer at exit.',
  metadataBase: new URL('https://trixon.cloud'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', rel: 'shortcut icon' }
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Trixon — Your Technical Co-Founder, Without the Co-Founder Equity',
    description: 'I work directly with early-stage founders as a hands-on technical partner — architecture, MVP builds, and fundraising-ready foundations — then hand over a codebase you fully own.',
    url: 'https://trixon.cloud',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        {/* Apollo Tracker */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo() {
              var n = Math.random().toString(36).substring(7), o = document.createElement("script");
              o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n, o.async = !0, o.defer = !0,
                o.onload = function () { window.trackingFunctions.onLoad({ appId: "69bcf22b483759001ddbc31a" }) },
                document.head.appendChild(o)
            } initApollo();
          `}
        </Script>
        {/* Clarity Tracker */}
        <Script id="clarity-tracker" strategy="afterInteractive">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "w4xw2mbaxl");
          `}
        </Script>
      </head>
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
