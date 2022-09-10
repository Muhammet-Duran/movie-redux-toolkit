import Input from "UI/Input/Input";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search_area}>
      <Input placeholder="search for a movie" />
    </div>
  );
};

export default Search;
