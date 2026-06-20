// This page will show details for a specific figure based on the ID in the URL
import { useRouter } from "next/router";

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
export default function FigureDetails({ figure}) {
    const router = useRouter();
    const { id } = router.query;

    //state
    const [inWishlist, setInWishlist] = useState(false);
    const [inCollection, setInCollection] = useState(false);

    //check status on load
    useEffect(() => {
        if (!id) return;

        setInWishlist(isInWishlist(id)); // setState is running inside a useEffect, causing an extra render, 
        setInCollection(isInCollection(id));
    }, [id]);
    

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

            <p className="figure-info">Series: {figure.seriesName}</p>
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

export async function getStaticPaths() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/series`
    );

    const seriesData = await response.json();

    const paths = [];

    seriesData.forEach((series) => {
        series.figures.forEach((figure) => {
            paths.push({
                params: {
                    id: `${series.id}-${figure.id}`,
                },
            });
        });
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/figure/${params.id}`
    );

    const figure = await response.json();

    return {
        props: {
            figure,
        },
    };

}


