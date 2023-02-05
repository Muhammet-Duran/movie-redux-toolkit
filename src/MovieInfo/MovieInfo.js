import MovieDetail from "pages/movieDetail";
import styles from "./MovieInfo.module.css";
import moment from "moment";

const MovieInfo = ({ movie, isFetching }) => {
  console.log(movie);
  // console.log(movie.original_title, "sas");
  // console.log(movie.id, "sas");

  const IMG_API = "https://image.tmdb.org/t/p/original";
  return (
    <div className={styles.detail_wrapper}>
      {isFetching ? (
        <p style={{ color: "#fff" }}>Loading...</p>
      ) : (
        <>
          <div className={styles.img_area}>
            <img
              src={
                movie?.poster_path
                  ? IMG_API + movie?.poster_path
                  : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              }
              alt={movie?.original_title}
            />
          </div>
          <div className={styles.movie_detail}>
            <h2 className={styles.title}>
              {movie?.original_title ? movie?.original_title : movie?.title}
            </h2>
            <p className={styles.overwiew}>{movie?.overview}</p>
            <div className={styles.body}>
              <div className={styles.row}>
                <h4 className={styles.info_title}>Original Release</h4>
                <p className={styles.info_text}>
                  {movie.release_date
                    ? moment(movie.release_date).format("MMMM D, YYYY")
                    : "N/A"}
                </p>
              </div>
              <div className={styles.row}>
                <h4 className={styles.info_title}>Budget</h4>
                <p className={styles.info_text}>
                  {movie.budget === 0 || !movie.budget
                    ? "N/A"
                    : `$${Number(movie.budget).toLocaleString()}`}
                </p>
              </div>
              <div className={styles.row}>
                <h4 className={styles.info_title}>Voting Average</h4>
                <p className={styles.info_text}>
                  {Math.round(movie.vote_average)}
                </p>
              </div>
              <div className={styles.row}>
                <h4 className={styles.info_title}>Runing Time</h4>
                <p className={styles.info_text}>
                  {movie.runtime === 0 || !movie.runtime
                    ? "N/A"
                    : `${movie.runtime} mins`}
                </p>
              </div>
              <div className={styles.row}>
                <h4 className={styles.info_title}>Revenue</h4>
                <p className={styles.info_text}>
                  {movie.revenue === 0 || !movie.revenue
                    ? "N/A"
                    : `$${Number(movie.revenue).toLocaleString()}`}
                </p>
              </div>
              <div className={styles.row}>
                <h4 className={styles.info_title}>Genres</h4>
                <div className={styles.info_genres}>
                  {movie?.genres.map((genre) => (
                    <span className={styles.genre}>{genre.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
