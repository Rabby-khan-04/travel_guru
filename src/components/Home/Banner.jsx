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
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import useDestination from "../../hooks/useDestination";
import { AuthContext } from "../../provider/AuthProvider";
import LoadingSpinner from "../shared/LoadingSpinner";
import SliderButton from "./SliderButton";

const Banner = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const destinations = useDestination();

  if (destinations.length) setLoading(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const currentDestination = destinations[activeIndex] || {};
  const { id, image, name, description } = currentDestination;

  if (loading) return <LoadingSpinner />;

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
