import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Home/Banner";

const Home = () => {
  const destinations = useLoaderData();
  return (
    <>
      <Banner destinations={destinations} />
    </>
  );
};

export default Home;
