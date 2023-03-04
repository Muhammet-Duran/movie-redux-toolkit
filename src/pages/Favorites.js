import Movies from "components/Movies/Movies";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favoriteMovies } = useSelector((state) => state.cardSlice);
  return (
    <div style={{ textAlign: "center", color: "#33c863" }}>
      {favoriteMovies.length > 0 ? (
        <Movies movies={favoriteMovies} favorite />
      ) : (
        <div>You don't have a favorite movie yet</div>
      )}
    </div>
  );
};

export default Favorites;
