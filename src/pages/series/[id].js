import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import seriesData from "../../data/seriesData";

export default function SeriesDetails() {
    const router = useRouter();
    const { id } = router.query;

    // Find the selected series
    const series = seriesData.find((s) => s.id === id);

    // Handle Loading state
    if (!router.isReady) return <p>Loading...</p>;

    if(!series) {
        router.replace("/404");
        return null;
    }

    return (
        <div>
            <h1 className="series-name">Series: {series.name}</h1>
            <p className="series-info">Release Date: {series.releaseDate}</p>
            <p className="series-description">{series.description}</p>
            
           

            {/*Figure Grid */}
                <div className="figures-container">
                    {series.figures.map((figure) => (
                        <div className="figure-card" key={figure.id}>

                            <h2>{figure.name}</h2>
                            
                            <Image
                                src={figure.image}
                                alt={figure.name}
                                width={200}
                                height={200}
                                // unoptimized
                            />

                            
                            
                            <p className={figure.rarity === "secret" ? "rarity secret" : "rarity"}>
                            </p>

                            <Link href={`/figure/${series.id}-${figure.id}`}>
                            View Figure
                            </Link>

                </div>
            ))}
        </div>
    </div>
                    
    );                  
}                      
                        
                        
