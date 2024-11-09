// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import media
import bannerImg from "../../assets/images/Rectangle_11.png";

// import required modules
import { Navigation } from "swiper/modules";
import DestinationCard from "./DestinationCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import SliderButton from "./SliderButton";
import axios from "axios";
import LoadingSpinner from "../shared/LoadingSpinner";

const Banner = () => {
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    axios.get("/destinations.json").then((res) => {
      setDestinations(res.data);
      if (res.data.length > 0) {
        setCurrentDestination(res.data[0]);
        setDataLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    setDataLoading(true);
    if (destinations.length > 0) {
      setCurrentDestination(destinations[activeIndex]);
      setDataLoading(false);
    }
  }, [activeIndex, destinations]);

  if (dataLoading) return <LoadingSpinner />;

  const { id, image, name, description } = currentDestination;

  return (
    <section
      className="bg-cover bg-center bg-black/70 pt-60 pb-28"
      style={{
        backgroundImage: `url(${image || bannerImg})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container text-white">
        <div className="grid grid-cols-5 gap-12">
          <div className="col-span-2">
            <h1 className="font-bebas_neue text-8xl text-white">{name}</h1>
            <p className="mb-6">
              {description?.length < 200
                ? description
                : description?.substring(0, 200) + " ..."}
            </p>
            <Link to={`/booking/${id}`} className="primary__btn">
              <span>Booking</span>{" "}
              <FaArrowRightLong className="text-2xl inline-block ml-3" />
            </Link>
          </div>
          <div className="col-span-3">
            <Swiper
              slidesPerView={2.7}
              spaceBetween={30}
              loop={true}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {destinations.map((destination) => (
                <SwiperSlide key={destination.id}>
                  <DestinationCard destination={destination} />
                </SwiperSlide>
              ))}
              <SliderButton />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
