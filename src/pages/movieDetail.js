import MovieInfo from "MovieInfo/MovieInfo";
import { useSelector } from "react-redux";
import Button from "UI/Button/Button";

const MovieDetail = () => {
  const { movieDetail } = useSelector((state) => state.cardSlice);

  return (
    <>
      <MovieInfo movie={movieDetail} />
      <Button to="/"></Button>
    </>
  );
};

export default MovieDetail;
