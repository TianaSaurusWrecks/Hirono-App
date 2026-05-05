import Image from "next/image";
import Link from "next/link";

export default function Purchase() {
  return (
    <div>
      <h1 className="collection">Purchase Hirono Figures</h1>

      
      <h2 className="purchase-text-h2">
        You can purchase official Hirono figures from Pop Mart:
      </h2>

      <div className="purchase-btn">
      <a
        href="https://www.popmart.com/au/collection/21/hirono"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Go to Pop Mart
      </a>
      </div>

      <Image 
                src={"/images/purchasepage-ben-palma-unsplash.jpg"} 
                alt={"hirono purchase"}
                width={600}
                height={600}
                className="purchase-img"
                unoptimized           
        />
    

    </div>
  );
}