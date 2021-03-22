import {Container, Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import {OneCard} from "./Card";


const useStyles = makeStyles({

});

const cards = [1,2,3,4,5,6,7,8,9];

export function Cards() {

    const classes = useStyles();

    return (
        <Container className={classes.cardsGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <OneCard/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}