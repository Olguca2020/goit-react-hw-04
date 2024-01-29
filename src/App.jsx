import { useEffect, useState } from "react";
import { fetchPhotosWithTopic } from "./gallery-api";

import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotosWithTopic();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchPhotos();
  }, []);
  return (
    <>
      <SearchBar />
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </>
  );
}

export default App;
