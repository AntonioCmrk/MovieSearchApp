import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden center items-center gap-4">
      <Navbar />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
