import { useEffect, useState } from "react";
import { fetchPhotosWithTopic } from "./gallery-api";
import { Audio } from "react-loader-spinner";

import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPhotosWithTopic();
        setPhotos(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);
  return (
    <>
      <SearchBar />
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      <LoadMoreBtn />
    </>
  );
}

export default App;
