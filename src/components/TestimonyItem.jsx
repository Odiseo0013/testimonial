import { useContext } from "react";
import { Avatar, Card, CardContent, CardHeader, Grid, Typography, IconButton } from "@mui/material"
import { TestimonyContext } from "../context";
import { Quotes, MapPin, TrashSimple } from "phosphor-react";

export const TestimonyItem = ({ id, name, location, rating, message, avatar }) => {

    const [testimonies, setTestimonies] = useContext(TestimonyContext);
 
    return (
        <Card> 
            <CardHeader 
                sx={{ padding: '15px 20px 0px 16px'}} 
                avatar={
                    <Avatar 
                        src={avatar}
                        sx={{ width: 60, height: 60 }}
                    />
                }
                title={name}
                subheader={
                    <>
                        <MapPin size={16} weight="fill" color={'#000'} />
                        <Typography variant="body3" color={'#000'}>{location}</Typography>
                    </>
                }
                action={
                    <Quotes size={24} weight="fill" />
                }
            />
            
            <CardContent>
                <Typography 
                    sx={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical',WebkitLineClamp: 3,}}
                    variant="body2"
                >
                    {message}
                </Typography>
                <Grid 
                    container 
                    sx={{ mt: 1, justifyContent: 'flex-start', alignItems: 'center'}}
                >
                    <Grid item sx={{flexGrow: '1'}}>
                        <Typography variant="body2">Rating: <strong>{rating}</strong></Typography>
                    </Grid>
                    <Grid item sx={{justifyContent: 'flex-end'}}>
                        <IconButton
                            onClick={ () => setTestimonies( testimonies.filter((c) => c.id !== id)) }
                        >
                            <TrashSimple size={20} weight="fill" />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}