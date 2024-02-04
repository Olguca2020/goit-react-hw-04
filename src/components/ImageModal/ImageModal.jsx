import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Додайте цей стиль
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    overflow: "hidden",
  },
};

export const ImageModal = ({ isOpen, onRequestClose, photo }) => {
  if (!photo) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <img
        className={css.imgModal}
        src={photo.cover_photo.urls.full}
        alt={photo.cover_photo.alt_description}
      />
      {/* <p>Author: {photo.user.name.toUpperCase()}</p>
      <p>Likes: {photo.user.total_likes}</p> */}
      {/* <button onClick={onRequestClose}>Close Modal</button> */}
    </Modal>
  );
};
