import axios from "axios";
import { useEffect, useState } from "react";

const useDestination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get("/destinations.json").then((res) => setDestinations(res.data));
  }, []);

  return destinations;
};

export default useDestination;
