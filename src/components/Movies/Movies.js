// import MovieCard from "components/MovieCard/";
import MovieCard from "components/MovieCard/MovieCard";
import styles from "./Movies.module.css";

const Movies = ({ movies }) => {
  return (
    <div className={styles.movie_list}>
      {movies?.results &&
        movies?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default Movies;
