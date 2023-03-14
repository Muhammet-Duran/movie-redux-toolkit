import Movies from "components/Movies/Movies";
import loadingGif from "./../../assets/Loading.gif";
import styles from "./Main.module.css";

const Main = ({ isLoading, error, data }) => {
  return (
    <>
      {isLoading ? (
        <div className={styles.wraper}>
          <img src={loadingGif} style={{width:"60px",height:"60px"}} alt="loading"  />
        </div>
      ) : error ? (
        <div className={styles.wraper}>
          <p>An error occured</p>
        </div>
      ) : (
        <Movies movies={data?.results} />
      )}
    </>
  );
};

export default Main;
