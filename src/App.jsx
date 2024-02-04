import { useEffect, useState } from "react";
import { fetchPhotosWithTopic } from "./gallery-api";
import { Audio } from "react-loader-spinner";
import { Toaster } from "react-hot-toast";

import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoadMoreVisible, setLoadMoreVisible] = useState(false);
  // const [totalPages, settotalPages] = useState(0);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const searchImg = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    //паттерн пропуску ефекту монтування при виклику ефекта
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPhotosWithTopic(query.split("/")[1], page);
        console.dir(data);
        setPhotos((prevData) => [...prevData, ...data.results]);
        const totalPages = data.total_pages;
        if (page === totalPages) {
          setLoadMoreVisible(false);
        } else {
          setLoadMoreVisible(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchImg} />

      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {photos.length > 0 && !loading && (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
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
      {isLoadMoreVisible && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        photo={selectedPhoto}
      />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
