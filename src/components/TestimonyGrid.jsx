import { useContext } from "react";
import { Grid } from "@mui/material";
import { TestimonyContext } from "../context";
import { useFetchTestimonies } from "../hooks/useFetchTestimonies";
import { TestimonyItem } from "./";

export const TestimonyGrid = () => {
  const { isLoading } = useFetchTestimonies();
  const [testimonies] = useContext(TestimonyContext);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      {testimonies.map((testimony) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={testimony.id}>
          <TestimonyItem {...testimony} />
        </Grid>
      ))}
    </>
  );
};
