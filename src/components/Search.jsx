import { GoSearch } from "react-icons/go";
import styles from "../style/Search.module.css";

const Search = ({ search, setSearch, searchHandler }) => {
  return (
    <>
      <div className={styles.search_container}>
        <span className={styles.search_icon} onClick={searchHandler}>
          <GoSearch fontSize="1.5rem" />
        </span>

        <input
          type="text"
          placeholder="Search The Book"
          className={styles.search_input}
          value={search}
          onChange={(event) =>
            setSearch(event.target.value.toLowerCase().trim())
          }
        />
      </div>
    </>
  );
};

export default Search;
