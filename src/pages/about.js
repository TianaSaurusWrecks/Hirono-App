import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1 className="collection">About Hirono</h1>
          

        <p className="about-text">
            Known for his subtle expressions and rich narrative depth, Hirono captures moments of introspection, vulnerability, and imagination through beautifully crafted figurines that invite you to connect with their unique charm and discover the emotion within each design.
        </p>
        
          <Image 
                        src={"/images/aboutpage.jpg"} 
                        alt={"hirono about"}
                        width={600}
                        height={600}
                        className="about-img"
                        // unoptimized
                    />

        <h2 className="about-text-h2">
            Lang
            
        </h2>
         <p className="about-text">
        Hirono is the creation of the amazing contemporary artist Lang. 
      </p>
        <p className="about-text">
        
            Click Here to Follow Lang on Instagram:
        </p>
        <div className="about-btn">
        <a  href="https://www.instagram.com/langswork"
        target="blank"
        rel="noopener noreferrer"
        className="button"
        >Visit Instagram</a>
        </div>





        </div>
    );
}