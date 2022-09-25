import styles from "./MovieCard.module.css";
import LikeIconSvg from "./../../assets/LikeIconSvg.js";
import Button from "UI/Button/Button";
import { useState, useEffect } from "react";
import { addToFavorite } from "features/cardSlice";
import { useDispatch, useSelector } from "react-redux";
const MovieCard = ({ movie }) => {
  const [likeMovie, setLikeMovie] = useState(false);
  const { favoriteMovies } = useSelector((state) => state.cardSlice);

  const dispatch = useDispatch();
  const handleAddToCart = (popular) => {
    dispatch(addToFavorite(popular));
  };

  const IMG_API = "https://image.tmdb.org/t/p/original";
  const setRating = (rating) => {
    if (rating >= 8) {
      return `${styles.green}`;
    } else if (rating >= 6) {
      return `${styles.orange}`;
    } else {
      return `${styles.red}`;
    }
  };
  useEffect(() => {
    if (favoriteMovies.find((favorite) => favorite.id === movie.id)) {
      setLikeMovie(true);
    } else {
      setLikeMovie(false);
    }
  }, [favoriteMovies.length]);

  return (
    <div className={styles.movie_card}>
      <img
        src={
          movie.poster_path
            ? IMG_API + movie.poster_path
            : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
        }
        alt={movie.original_title}
      />
      <div className={styles.card_detail}>
        <div className={`${styles.content} ${styles.content_top}`}>
          <span className={styles.movie_title}>{movie.title}</span>
          <span className={styles.movie_releas_date}>
            {movie?.release_date?.slice(0, 4)}
          </span>
        </div>
        <div className={`${styles.content} ${styles.content_bottom}`}>
          {movie?.vote_average !== 0 && (
            <div className={styles.movie_rating}>
              <svg
                aria-label="movie rating"
                className={`${styles.round} ${setRating(movie.vote_average)}`}
                viewBox="0 0 40 40"
                width="40"
                height="40"
                strokeDasharray={`${Math.floor(
                  (movie.vote_average * 112) / 10
                )} 999`}
              >
                <circle cx="50%" cy="50%" r="18" />
              </svg>
              <span>{movie.vote_average}</span>
            </div>
          )}
          <Button
            className={styles.add_btn}
            onClick={() => handleAddToCart(movie)}
          >
            <LikeIconSvg
              isActive={likeMovie}
              svg={styles.movie__info__svg}
              active={styles.active}
              width="32px"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
