import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Input from "UI/Input/Input";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { useGetSearchQuery } from "features/movieApi";
import { selectCategory } from "features/cardSlice";
const Search = () => {
  const dispatch = useDispatch();
  const IMG_API = "https://image.tmdb.org/t/p/original";
  const [skip, setSkip] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchTerm, 500);

  const {
    data: searchResult,
    isSuccess: searchedForMovie,
    isLoading: resultLoading,
  } = useGetSearchQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery === "",
  });
  const handleMoviesSearch = (e) => {
    setSearchTerm(e.currentTarget.value);
    setSkip((prev) => !prev);
  };
  useEffect(() => {
    if (searchTerm.length >= 4) {
      setSpinnerLoading(true);
      const delayDebounceFn = setTimeout(() => {
        setSpinnerLoading(false);
      }, 1000);
      return () => {
        clearTimeout(delayDebounceFn);
        setSpinnerLoading(false);
      };
    }
  }, [searchTerm]);
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  return (
    <div className={styles.search_area}>
      {spinnerLoading && <div className={styles.spinner_gif}></div>}
      <Input
        value={searchTerm}
        placeholder="search for a movie"
        onChange={handleMoviesSearch}
      />
      <ul className={styles.search_result}>
        {searchedForMovie &&
          searchResult?.results.map((movie) => (
            <li className={styles.res_item}>
              <a
                href={`/${movie.id}`}
                onClick={() =>
                  dispatch(selectCategory({ category: "popular", skip: true }))
                }
                className={styles.movie_link}
              >
                <div className={styles.img_area}>
                  <img
                    src={
                      movie.poster_path
                        ? IMG_API + movie.poster_path
                        : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                    }
                    alt={movie.original_title}
                  />
                </div>
                <p className={styles.movie_title}>{movie?.original_title}</p>
                <p className={styles.release_date}>
                  ({movie?.release_date?.slice(0, 4)})
                </p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
