// import MovieCard from "components/MovieCard/MovieCard";
import Movies from "components/Movies/Movies";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const { favoriteMovies } = useSelector((state) => state.cardSlice);
  return <div>{favoriteMovies && <Movies movies={favoriteMovies} />}</div>;
};

export default Favorites;
