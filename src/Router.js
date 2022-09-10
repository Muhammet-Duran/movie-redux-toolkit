import { Route, Routes } from "react-router-dom";

import { Favorites, HomePage } from "./pages/Index";
function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default Router;
