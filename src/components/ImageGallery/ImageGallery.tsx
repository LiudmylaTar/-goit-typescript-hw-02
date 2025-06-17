import { UnsplashImage } from "../App/App.type";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
interface ImageCardProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}
const ImageGallery = ({ images, onImageClick }: ImageCardProps) => {
  return (
    <>
      <ul className={css.list}>
        {images.map((image) => (
          <li className={css.item} key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
