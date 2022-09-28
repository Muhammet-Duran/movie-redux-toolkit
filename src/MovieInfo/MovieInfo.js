import styles from "./MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
  const IMG_API = "https://image.tmdb.org/t/p/original";
  console.log(movie);
  return (
    <div styles={styles.detail_wrapper}>
      <div className={styles.img_area}>
        <img
          style={{ width: "250px" }}
          src={
            movie.poster_path
              ? IMG_API + movie.poster_path
              : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          }
          alt={movie.original_title}
        />
      </div>
      <div className={styles.movie_detail}>
        <h2 className={styles.title}>
          {movie.original_title ? movie.original_title : movie.title}
        </h2>
        <p className={styles.overwiew}>{movie.overview}</p>
        <div className={styles.body}>
          <div className={styles.row}>
            <h4 className={styles.info_title}>Original Release</h4>
            <p className={styles.info_text}>{movie.release_date}</p>
          </div>
          <div className={styles.row}>
            <h4 className={styles.info_title}>Budget</h4>
            <p className={styles.info_text}></p>
          </div>
          <div className={styles.row}>
            <h4 className={styles.info_title}>Voting Average</h4>
            <p className={styles.info_text}></p>
          </div>
          <div className={styles.row}>
            <h4 className={styles.info_title}>Runing Time</h4>
            <p className={styles.info_text}></p>
          </div>
          <div className={styles.row}>
            <h4 className={styles.info_title}>Revenue</h4>
            <p className={styles.info_text}></p>
          </div>
          <div className={styles.row}>
            <h4 className={styles.info_title}>Genres</h4>
            <div className={styles.info_genres}>
              <span className={styles.genre}>Thriller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
