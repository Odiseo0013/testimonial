import { useContext, useEffect, useState } from "react";
import { TestimonyContext } from "../context";
import { getTestimony } from "../helpers/getTestimony";

export const useFetchTestimonies = () => {
  const [testimonies, setTestimonies] = useContext(TestimonyContext);
  const [isLoading, setIsLoading] = useState(true);

  const getTestimonies = async () => {
    const newTestimony = await getTestimony();
    setTestimonies(newTestimony);
    setIsLoading(false);
  };

  useEffect(() => {
    getTestimonies();
  }, []);

  return {
    testimonies,
    isLoading,
  };
};
