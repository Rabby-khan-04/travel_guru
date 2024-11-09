import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <>
      <Header theme="light" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
