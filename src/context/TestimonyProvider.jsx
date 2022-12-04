import { useState } from "react";
import { TestimonyContext } from "./";

export const TestimonyProvider = ({ children }) => {
  const [testimonies, setTestimonies] = useState([]);

  return (
    <TestimonyContext.Provider value={[testimonies, setTestimonies]}>
      {children}
    </TestimonyContext.Provider>
  );
};
