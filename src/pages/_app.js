import "@/styles/globals.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cormorant_Upright, Poppins } from "next/font/google";

const cormorant = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"]
});


export default function App({ Component, pageProps }) {
  return  (
    <div className="page-container">
      <Navbar />

      <main className={`content ${cormorant.className}`}>
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
    
  );
}
