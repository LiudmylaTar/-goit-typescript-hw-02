import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoClose } from "react-icons/io5";
import { UnsplashImage } from "../App/App.type";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: UnsplashImage | null;
}
const ImageModal = ({ isOpen, onRequestClose, image }: ImageModalProps) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button onClick={onRequestClose} className={css.closeBtn}>
        <IoClose size="32" />
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description ?? "Image"}
        className={css.largeImg}
      />
    </Modal>
  );
};

export default ImageModal;
