import Modal from "react-modal";

const customStyles = {
  content: {
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
        src={photo.cover_photo.urls.full}
        alt={photo.cover_photo.alt_description}
        // width="350px"
      />
      <p>Author: {photo.user.name.toUpperCase()}</p>
      <p>Likes: {photo.user.total_likes}</p>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};
