import { Footer, Header, Layout } from "./components/Index";

import {
  useGetMoviesQuery,
  useGetTvEpisodesQuery,
  useGetReleaseYearQuery,
} from "./features/movieApi";
// import Router from './Router';

function App() {
  const { data: movies, error, isLoading, isFetching } = useGetMoviesQuery();
  console.log(movies, "popular");
  // const { data : discover} = useGetTvEpisodesQuery();
  // console.log(discover,"discover")
  // const { data : releaseYear} = useGetReleaseYearQuery();
  // console.log(releaseYear,"tarih")

  if (isFetching) return "Loading...";
  return (
    <div className="App">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
