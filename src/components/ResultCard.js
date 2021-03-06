import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "#470c5c"
    },
    media: {
        height: 140,
    },
    cardTitle: {
        color: "#ffffff",
        fontWeight: "600"
    }
});

export const ResultCard = ({movie}) => {

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea href={`movie/${movie.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        title={`${movie.title}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                            {movie.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    )
};