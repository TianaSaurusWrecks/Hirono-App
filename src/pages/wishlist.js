import { useEffect, useState } from "react";
import Image from "next/image";
import { getWishlist, removeFromWishlist } from "../utils/storage"

export default function Wishlist() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getWishlist());
    }, []);

    const handleRemove = (id) => {
        removeFromWishlist(id);
        setItems((prev) => prev.filter((item) => item.id !== id));
    };
        

 
 return (
    <div>
        <h1 className="collection">My Wishlist </h1>

        <div className="figures-container">
            {items.map((item) => (
                <div className="figure-card" key={item.id}>
                    <h2>{item.name}</h2>

                    <Image
                        src={item.image}
                        width={200}
                        height={200}
                        alt={item.name}
                        unoptimized
                    />
                    
                    <button
                    className="button"
                    onClick={() => handleRemove(item.id)}
                    >
                        Remove from Wishlist
                    </button>

                </div>

            ))}
        </div>
    </div>
 );

}

