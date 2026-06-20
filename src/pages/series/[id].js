
import Link from "next/link";
import Image from "next/image";


export default function SeriesDetails({ series }) {
   


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
                    
    )       
}   
    
    // which series page to build
    export async function getStaticPaths() {

        const response = await fetch("http://localhost:3000/api/series");
        const seriesData = await response.json();

        const paths = seriesData.map((series) => ({
            params: {
                id: series.id,
            },
        }));

        return {
            paths,
            fallback: false,
        };
    }
    
    // fetch data
    export async function getStaticProps({ params }) {

        const response = await fetch(
            `http://localhost:3000/api/series/${params.id}`
        );

        const series = await response.json();

        return {
            props: {
                series,
            },
        };
    }
                  
                        
                        
