// usePexelsPhotos.js
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "YOUR_PEXELS_API_KEY";

export function usePexelsPhotos(query = "food donation", perPage = 15) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          params: { query, per_page: perPage },
          headers: {
            Authorization: API_KEY,
          },
        });
        setPhotos(response.data.photos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query, perPage]);

  return { photos, loading, error };
}
