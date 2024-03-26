import { useNavigate } from "react-router-dom";
import { Close, Menu } from "react-ionicons";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-violet-400 w-full p-4 h-[5.5rem]">
      <h1
        className="absolute p-4 cursor-pointer text-xl font-bold text-violet-900 z-20"
        onClick={() => navigate("/")}
      >
        Movie search
      </h1>
      <ul
        className={`flex justify-center mx-auto relative [&>*]:p-4 [&>*]:mx-7 hover:[&>*]:text-white  max-xl:bg-white max-xl:flex-col max-xl:mt-[4.5rem] max-xl:text-center rounded-b-lg max-xl:z-10 list-outside [&>*]:max-xl:m-4 ${
          menuOpen ? "" : "max-xl:hidden"
        }`}
      >
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => {
            setMenuOpen(false);
            navigate("/trending-movies");
          }}
        >
          Trending movies
        </li>
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => {
            setMenuOpen(false);
            navigate("/top-rated-movies");
          }}
        >
          Top rated movies
        </li>
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => {
            setMenuOpen(false);
            navigate("/trending-shows");
          }}
        >
          Trending shows
        </li>
        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => {
            setMenuOpen(false);
            navigate("/top-rated-shows");
          }}
        >
          Top rated shows
        </li>

        <li
          className="hover:bg-violet-600 cursor-pointer rounded-lg"
          onClick={() => {
            setMenuOpen(false);
            navigate("/trending-persons");
          }}
        >
          Trending persons
        </li>
      </ul>
      <button
        name="menu"
        className="absolute p-4 right-4 top-4 text-3xl cursor-pointer md:xl xl:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <Close color="#4C1D95" /> : <Menu color="#4C1D95" />}
      </button>
    </div>
  );
};

export default Navbar;
