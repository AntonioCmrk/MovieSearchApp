import { Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import { Home } from "../pages/Home";
import { TrendingMovies } from "../pages/TrendingMovies";

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending-movies" element={<TrendingMovies />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default NavigationRoutes;
