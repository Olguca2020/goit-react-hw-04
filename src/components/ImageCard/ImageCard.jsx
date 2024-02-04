import css from "./ImageCard.module.css";

export const ImageCard = ({ smallPhoto, descr, photoName, likes, onClick }) => {
  const handleClick = () => {
    console.log("Image clicked");
    onClick();
  };

  return (
    <div className="css.cardWrapper" onClick={handleClick}>
      <div className={css.imgWrapper}>
        <img className={css.cardImg} src={smallPhoto} alt={descr} />
      </div>
      <p>Author: {photoName.toUpperCase()}</p>
      <p>Likes: {likes}</p>
    </div>
  );
};
