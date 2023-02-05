import { useGetDetailQuery } from "features/movieApi";
import MovieInfo from "MovieInfo/MovieInfo";
import { useParams } from "react-router-dom";
import Button from "UI/Button/Button";

const MovieDetail = () => {
  let { id } = useParams();
  const { data: movieDetail, isFetching } = useGetDetailQuery(id);
  // console.log(movieDetail,"info")
  // console.log(  "nehaber")

  return (
    <div className="container">
      <MovieInfo movie={movieDetail} isFetching={isFetching} />
    </div>
  );
};

export default MovieDetail;
