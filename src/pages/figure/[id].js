// This page will show details for a specific figure based on the ID in the URL
import { useRouter } from "next/router";
import seriesData from "../../data/seriesData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    addToCollection,
    isInCollection
} from "../../utils/storage";




// This page will be at /figure/[id]
export default function FigureDetails() {
    const router = useRouter();
    const { id } = router.query;

    // The ID is in the format "seriesId-figureId"
    const [seriesId, figureId] = id ? id.split("-") : [];

    const series = seriesData.find((s) => s.id === seriesId);
    const figure = series?.figures.find((f) => f.id === figureId);

    //state
    const [inWishlist, setInWishlist] = useState(false);
    const [inCollection, setInCollection] = useState(false);

    //check status on load
    useEffect(() => {
        if (!id) return;

        setInWishlist(isInWishlist(id));
        setInCollection(isInCollection(id));
    }, [id]);

    if (!router.isReady) return <p>Loading...</p>

    if (!series || !figure) {
        router.replace("/404");
        return null;
    }
    

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1 className="figure-name">{figure.name}</h1>
            
            <Image 
                src={figure.image} 
                alt={figure.name}
                width={800}
                height={800}
                className="figure-img"
                // unoptimized
            />

            <p className="figure-info">Series: {series.name}</p>
            <p className="figure-info">Rarity: {figure.rarity}</p>


             <button
                className="button"
                    onClick={() => {
                        addToCollection({
                            id: id,
                            name: figure.name,
                            image: figure.image,
                        });
                        // remove from wishlist automatically
                        removeFromWishlist(id);

                        setInCollection(true);
                        setInWishlist(false);
                    }}
                    disabled={inCollection}
                    >
                        {inCollection ? "In Collection" : "Add to Collection"}
                </button>

                <br />


            <button
            className="button"
                onClick={() => {
                    if (inWishlist) {
                        removeFromWishlist(id);
                        setInWishlist(false);
                    } else {
                    
                        addToWishlist({
                            id: id,
                            name: figure.name,
                            image: figure.image,
                        });
                        setInWishlist(true);
                    }
                }}
            >
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
           
            </button>

            


        </div>
    );
}
