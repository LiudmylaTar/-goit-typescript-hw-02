import { UnsplashImage } from "../App/App.type";
import css from "./ImageCard.module.css";
interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}
const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description ?? ""}
        width="300"
        height="200"
        onClick={() => onClick(image)}
        className={css.image}
      />
    </div>
  );
};
export default ImageCard;
