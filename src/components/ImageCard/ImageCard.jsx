import css from "./ImageCard.module.css";

export const ImageCard = ({ smallPhoto, descr, photoName, likes }) => {
  return (
    <div>
      <img className={css.cardImg} src={smallPhoto} alt={descr} />
      <p>Author: {photoName.toUpperCase()}</p>
      <p>Likes: {likes}</p>
    </div>
  );
};
