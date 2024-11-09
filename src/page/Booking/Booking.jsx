import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

const Booking = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const { data } = useLoaderData();

  if (data.length) setLoading(false);
  const { destinationId } = useParams();
  const currentDestination = data.find(
    (destination) => destination.id === destinationId
  );

  if (loading) return <LoadingSpinner />;
  const { id, image, name, description } = currentDestination;
  return (
    <section
      className="h-screen bg-cover bg-center bg-black/70 pt-60 pb-28"
      style={{
        backgroundImage: `url(${image})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container text-white">
        <div className="grid grid-cols-2 gap-12">
          <div className="">
            <h1 className="font-bebas_neue text-8xl text-white">{name}</h1>
            <p className="mb-6">{description}</p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
