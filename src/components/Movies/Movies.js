// import MovieCard from "components/MovieCard/";
import MovieCard from "components/MovieCard/MovieCard";
import styles from "./Movies.module.css";

const Movies = () => {
  return (
    <div className={styles.movie_list}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default Movies;
