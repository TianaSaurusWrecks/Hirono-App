import { useRouter } from "next/router";
import seriesData from "../data/seriesData";
import Image from "next/image";
import Link from "next/link";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  // wait for query to load
  if (!router.isReady) return <p>Loading...</p>;

  const searchQuery = q.toLowerCase().trim();

  // Flatten all figures into one list
  const results = seriesData.flatMap((series) =>
    series.figures
      .filter((figure) => figure.name.toLowerCase().includes(searchQuery))
      .map((figure) => ({
        ...figure,
        seriesName: series.name,
        fullId: `${series.id}-${figure.id}`,
      })),
  );

  // temporary logs
  console.log("SEARCH QUERY:", searchQuery);
  console.log(
    "ALL FIGURES:",
    seriesData.flatMap((s) => s.figures),
  );
  console.log("RESULTS:", results);

  return (
    <div>
      <h1 className="results">Search Results: </h1>

      <div className="figures-container">
        {results.map((item) => (
          <div className="figure-card" key={item.fullId}>
            <h2>{item.name}</h2>

            <Image
              src={item.image}
              width={200}
              height={200}
              alt={item.name}
            //   unoptimized
            />

            <Link href={`/figure/${item.fullId}`} className="button">
              View Figure
            </Link>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <p style={{ textAlign: "center" }}>No Results Found</p>
      )}
    </div>
  );
}
