import PropTypes from "prop-types";

const DestinationCard = ({ destination }) => {
  const { name, image } = destination;

  return (
    <div
      className="h-[416px] rounded-[20px] bg-center bg-no-repeat bg-cover relative px-5 py-9 flex items-end drop-shadow-xl slide"
      style={{
        backgroundImage: `url(${image})`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent rounded-[20px]" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-white text-4xl font-normal font-bebas_neue">
          {name}
        </h3>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.object.isRequired,
};

export default DestinationCard;
