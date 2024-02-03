import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.query.value);
    const form = evt.target;
    if (form.elements.query.value.trim() === "") {
      toast.error("Add a search term");
      return;
    }
    onSearch(form.elements.query.value);
    form.reset();
  };
  return (
    <header className={css.box}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          name="query"
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
