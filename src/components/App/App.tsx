import { useState, CSSProperties, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchGallery } from "../../gallery-api";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import NotFoundMessage from "../NotFoundMessage/NotFoundMessage";
import Modal from "react-modal";
import ImageModal from "../ImageModal/ImageModal";
import { useToggle } from "../../hooks/useToggle";
import { UnsplashImage } from "./App.type";
Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [typeImg, setTypeImg] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingMore, setLoadingMore] = useState(false);
  // For modal windows
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const { isOpen, open, close } = useToggle();
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const searchImg = (inputValue: string) => {
    setTypeImg(inputValue);
    setCurrentPage(1);
    setImages([]);
  };

  const incrementPage = () => {
    setLoadingMore(true);
    setCurrentPage(currentPage + 1);
  };
  // For modal windows
  const handleImageClick = (image: UnsplashImage) => {
    setModalLoading(true);
    const img = new Image();
    img.src = image.urls.regular;

    img.onload = () => {
      setSelectedImage(image);
      setModalLoading(false);
      open();
    };

    img.onerror = () => {
      setModalLoading(false);
      alert("Failed to load image");
    };
  };

  useEffect(() => {
    if (typeImg === "") {
      return;
    }
    async function getImages() {
      try {
        setIsError(false);
        setLoading(true);
        const data = await fetchGallery(typeImg, currentPage);
        setImages((prevImg) => [...prevImg, ...data.images]);
        setTotalPages(data.totalPages);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    }
    getImages();
  }, [typeImg, currentPage]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            background: "rgba(238, 167, 37, 0.9)",
          },
        }}
      />
      <SearchBar onSubmit={searchImg} />
      {isLoading && <Loader />}
      {isError && <p>Something went wrong, try again later</p>}
      {!isLoading && !isError && images.length === 0 && typeImg !== "" && (
        <NotFoundMessage
          text={`Try a different search — no results here "${typeImg}".`}
        />
      )}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {modalLoading && (
        <div className="modal-loader-wrapper">
          <Loader />
        </div>
      )}
      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          onRequestClose={close}
          image={selectedImage}
        />
      )}
      {images.length > 0 &&
        currentPage !== totalPages &&
        (isLoadingMore ? (
          <Loader />
        ) : (
          <LoadMoreBtn changePage={incrementPage} />
        ))}
    </>
  );
}

export default App;
