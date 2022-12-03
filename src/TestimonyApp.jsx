import { Container, Grid } from "@mui/material";
import { TestimonyGrid } from "./components";

export const TestimonyApp = () => {

  return (
    <>  
        <Container maxWidth="xlg">
            <Grid container spacing={2} justifyContent="center">
                <TestimonyGrid />
            </Grid>    
        </Container>
    </>
  )
}

