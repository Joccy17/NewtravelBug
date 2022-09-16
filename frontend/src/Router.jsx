import { Route, Routes } from "react-router-dom";
import Favorite from "./containers/Favorite";
import Highlight from "./containers/Highlight";
import Home from "./containers/Home";
import Maps from "./containers/Maps";
import Places from "./containers/Places";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/maps" element={<Maps />} />
      <Route  exact path="/places/:id" element={<Places />} />
      <Route exact path="/highlight/:id" element={<Highlight />} />
      <Route exact path="/favorite" element={<Favorite />} />
    </Routes>
  );
};
export default Router;
