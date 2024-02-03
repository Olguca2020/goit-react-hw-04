import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} onClick={handleLoadMore}>
      Load more
    </button>
  );
};
