import seriesData from "../../../data/seriesData";

// API handler
export default function handler(req, res) {
    // get id from the URL eg api/series/1
    const { id } = req.query;

    // find the matching series
    const series = seriesData.find((s) => s.id === id);

    // if no series found, return 404
    if (!series) {
        return res.status(404).json( {
            error: "Series not Found"
        });
    }
    // Return the matching serties as JSON
    res.status(200).json(series);
}