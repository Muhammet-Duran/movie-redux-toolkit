import { useState } from "react";
import Input from "UI/Input/Input";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { movieQuery } from "features/cardSlice";
// import { useGetSearchQuery } from "features/movieApi";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    if (search.trim().length > 0) {
      e.preventDefault();
      dispatch(movieQuery(searchTerm));
    }
  };
  // const { data,isLoading,error } = useGetSearchQuery(searchTerm);
  // const queryHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(movieQuery(searchTerm));
  // };
  return (
    <div className={styles.search_area}>
      <Input
        value={searchTerm}
        placeholder="search for a movie"
        onChange={handleChange}
        // onSubmit={(e) => queryHandler(e)}
      />
    </div>
  );
};

export default Search;
