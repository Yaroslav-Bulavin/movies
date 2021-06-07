import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "#470c5c"
    },
    media: {
        height: 210,
    },
    cardTitle: {
        color: "#ffffff",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 22
    },
    titleInner: {
        padding: "16px 16px 0 16px"
    }
});

const CardInCinema = ({film}) => {

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea href={`http://localhost:3000/movie/${film.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                        title={film.title}
                    />
                    <CardContent className={classes.titleInner}>
                        <Typography gutterBottom
                                    variant="h5"
                                    component="h2"
                                    className={classes.cardTitle}>
                            {film.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
export default CardInCinema