import MovieCard from "./../MovieCard/MovieCard";
import styles from "./Movies.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Movies = ({ movies }) => {
  return (
    <AnimatePresence>
      <div className={styles.movie_list}>
        {movies &&
          movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </AnimatePresence>
  );
};

export default Movies;
