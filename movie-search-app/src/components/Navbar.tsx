import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-violet-400 w-full p-4">
      <h1
        className="absolute p-4 cursor-pointer text-xl font-bold text-violet-900"
        onClick={() => navigate("/")}
      >
        Movie search
      </h1>
      <ul className="flex justify-center mx-auto  [&>*]:p-4 [&>*]:mx-7 hover:[&>*]:text-white ">
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => navigate("/trending-movies")}
        >
          Trending movies
        </li>
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => navigate("/top-rated-movies")}
        >
          Top rated movies
        </li>
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => navigate("/trending-shows")}
        >
          Trending shows
        </li>
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => navigate("/top-rated-shows")}
        >
          Top rated shows
        </li>

        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => navigate("/trending-persons")}
        >
          Trending persons
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
