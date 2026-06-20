import seriesData from "../../../data/seriesData";

export default function handler(req, res) {
    // get the figure id from URL eg /api/figure/1-1
    const { id } = req.query;

    // Split into series id and figure id 
    const [seriesId, figureId] = id.split("-");

    // find matching series 
    const series = seriesData.find(
        (s) => s.id === seriesId
    );

    if (!series) {
        return res.status(404).json({
            error: "Series not found"
        });
    }

    // find matching figure
    const figure = series.figures.find(
        (f) => f.id === figureId
    );

    if (!figure) {
        return res.status(404).json({
            error: "Figure not found"
        });
    }

    // return figure data
    res.status(200).json({
        ...figure,
        seriesName: series.name,
        seriesId: series.id
});
}