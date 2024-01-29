import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
export const SearchBar = () => {
  return (
    <header className={css.box}>
      <form className={css.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <IoIosSearch className={css.serchIcon} />
        </button>
      </form>
    </header>
  );
};
