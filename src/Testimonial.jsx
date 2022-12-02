import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardTestimony } from "./components/CardTestimony";

export const deleteItem = (id) => {
  //console.log('entra a borrar');

  // const [newlist, setNewList] = useState([id]);
  console.log(id);

  // setList((list) =>
  // list.filter((list) => list.id !== id)
  // );
}

export const Testimonial = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
      axios({
        url: "https://testimonialapi.toolcarton.com/api",
      })
        .then((response) => {
          const respOrdered = response.data.sort((a,b) => b.rating - a.rating);
          setList(respOrdered);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <>  
        <Container maxWidth="xlg">
            <Grid container spacing={2} justifyContent="center">
                {
                  list.map( ( item ) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <CardTestimony {...item} />
                    </Grid>  
                  ))
                }
            </Grid>    
        </Container>
    </>
  )
}

