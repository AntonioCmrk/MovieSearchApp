import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate("/trending-movies")}>Trending movies</div>
      <div>Trending persons</div>
      <div>Top rated movies</div>
    </>
  );
};
