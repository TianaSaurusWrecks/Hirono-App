import Link from "next/link";
import seriesData from "../data/seriesData";
import Image from "next/image";

export default function Series() {
    return (
        <div className="series-page">
             <h1 className="collection">Series </h1>
        
       
        <div className="series-container">
           
            
            {seriesData.map((series) => (
                <div className="series-card"key={series.id}>
                    <h2>{series.name}</h2>

                    <Image 
                    src={series.image} 
                    alt={series.name}
                    width={260} 
                    height={260}
                    className="series-img"
                    unoptimized // remove this when project complete, this is just to stop next cacheing images during development
                    
                    />

                    <br />

                    <Link href={`/series/${series.id}`}>
                        View Series
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
}
