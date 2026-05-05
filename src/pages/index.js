//* In Next.js, each file inside the pages folder is a route.
//? The index.js file corresponds to the root route ("/") of the application. This file typically contains the main component that renders the homepage of the application.
// pages/series.js   =   /series
// pages/series/[id].js   eg =   /series/1

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero-container">
      <Image
        src="/images/hero.jpg"
        alt="Hirono Hero"
        width={1700}
        height={800}
        className="hero-img"
        unoptimized
      />

      <div className="hero-content">
        {/* <h1>Hirono Collection</h1> */}

        <Link className="hero-btn" href="/series">
          View All Series
        </Link>

        <h2 className="tagline">Explore Hirono Series and Figurines</h2>
      </div>
    </div>
  );
}
