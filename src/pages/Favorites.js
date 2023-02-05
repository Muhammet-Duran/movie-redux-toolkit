import Movies from "components/Movies/Movies";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favoriteMovies } = useSelector((state) => state.cardSlice);
  return <div>{favoriteMovies && <Movies movies={favoriteMovies} />}</div>;
};

export default Favorites;
