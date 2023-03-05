import { useGetDetailQuery } from "features/movieApi";
import MovieInfo from "MovieInfo/MovieInfo";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  let { id } = useParams();
  const { data: movieDetail, isFetching } = useGetDetailQuery(id);

  return <MovieInfo movie={movieDetail} isFetching={isFetching} />;
};

export default MovieDetail;
