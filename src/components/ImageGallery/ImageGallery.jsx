import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.imgWrapper}>
      {photos.map((photo) => (
        <li className={css.photoCard} key={photo.id}>
          <ImageCard
            smallPhoto={photo.cover_photo.urls.small}
            descr={photo.cover_photo.alt_description}
            photoName={photo.user.name}
            likes={photo.user.total_likes}
            onClick={() => openModal(photo)}
          />
        </li>
      ))}
    </ul>
  );
};
