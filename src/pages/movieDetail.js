import { useGetDetailQuery } from "features/movieApi";
import MovieInfo from "MovieInfo/MovieInfo";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  let { id } = useParams();
  const { data: movieDetail, isFetching } = useGetDetailQuery(id);

  return (
    <div className="container">
      <MovieInfo movie={movieDetail} isFetching={isFetching} />
    </div>
  );
};

export default MovieDetail;
