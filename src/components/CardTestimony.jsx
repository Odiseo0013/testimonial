import { Avatar, Card, CardContent, CardHeader, Grid, Typography, IconButton, Box } from "@mui/material"
import { Quotes, MapPin, TrashSimple } from "phosphor-react";
import { deleteItem } from "../Testimonial";

export const CardTestimony = ({ id, name, location, rating, message, avatar }) => {
    
    return (
    <Card> 
        <CardHeader 
            sx={{ padding: '15px 20px 0px 16px', color: '#000'}} 
            avatar={
                <Avatar 
                    src={avatar}
                    sx={{ width: 60, height: 60 }}
                    aria-label="recipe" 
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
            <Typography sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
            }} variant="body2">{message}</Typography>
            <Grid 
                container 
                sx={{ mt: 1, justifyContent: 'flex-start', alignItems: 'center'}}
            >
                <Grid item sx={{flexGrow: '1'}}>
                    <Typography variant="body2">Rating: <strong>{rating}</strong></Typography>
                </Grid>
                <Grid item sx={{justifyContent: 'flex-end'}}>
                    <IconButton
                        
                        onClick={ () => deleteItem({id}) } 
                    >
                        <TrashSimple size={20} weight="fill" />
                    </IconButton>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}
