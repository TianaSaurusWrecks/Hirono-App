import "@/styles/globals.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cormorant_Upright, Poppins } from "next/font/google";

import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as gtag from "../lib/gtag";

const cormorant = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"]
});


export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };

  }, [router.events]);

  return  (
    <>
    {/* Google Analytics */}
      <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive">

        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}');
        `}

        </Script>


    <div className="page-container">
      <Navbar />

      <main className={`content ${cormorant.className}`}>
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
    </>
    
  );
}
