import {Container, Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useState} from "react";
import {OneCard} from "./Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
    cardsTitle: {
        margin: "60px auto 20px"
    },
    buttonShow: {
        margin: "20px auto",
        width: "100%"
    }
});


export function Cards() {

    const classes = useStyles();
    const [populars, setPopulars] = useState([]);

    const showPopulars = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(!data.errors) {
                    setPopulars(data.results);
                } else {
                    setPopulars([]);
                }
            });
    };


    return (
        <>
            <Container className={classes.cardsGrid} maxWidth="md">
                <Typography variant="h4" align="center" className={classes.cardsTitle}>Popular films</Typography>
                <Button variant="contained"
                        color="secondary"
                        onClick={showPopulars}
                        className={classes.buttonShow}>
                    Show
                </Button>
                {populars.length > 0 && (
                    <Grid container spacing={2}>
                        {populars.map(popular => (
                            <Grid item xs={12} sm={6} md={4} key={popular.id}>
                                <OneCard popular={popular}/>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </>
    )
}