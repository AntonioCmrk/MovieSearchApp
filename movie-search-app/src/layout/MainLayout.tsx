import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen center items-center">
      <Navbar />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
