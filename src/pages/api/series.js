// Import data
import seriesData from "../../data/seriesData";


// API Handler
export default function handler(req, res) {
  // return JSON data
  res.status(200).json(seriesData);
}
