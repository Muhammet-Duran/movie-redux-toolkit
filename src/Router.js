
import { Route, Routes } from "react-router-dom";

import {Favorites,Homepage} from "./pages/Index"
function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default Router;