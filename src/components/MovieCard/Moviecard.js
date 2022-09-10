import styles from "./MovieCard.module.css";
import movieImg from "./../../assets/movie.jpeg";
const MovieCard = () => {
  return (
    <div className={styles.movie_card}>
      <img src={movieImg} alt="movie" />
    </div>
  );
};

export default MovieCard;
