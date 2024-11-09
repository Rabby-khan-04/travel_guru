import { useSwiper } from "swiper/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const SliderButton = () => {
  const swipe = useSwiper();
  return (
    <div className="mt-20 text-2xl text-black flex items-center gap-3">
      <button
        className="p-3 bg-white rounded-full inline-block"
        onClick={() => swipe.slidePrev()}
      >
        <FaAngleLeft />
      </button>
      <button
        className="p-3 bg-white rounded-full inline-block"
        onClick={() => swipe.slideNext()}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default SliderButton;
