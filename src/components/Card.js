import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";


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

export function OneCard({popular}) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea href={`movie/${popular.id}`}>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                    title={popular.title}
                />
                <CardContent>
                    <Typography gutterBottom
                                variant="h5"
                                component="h2"
                                className={classes.cardTitle}>
                        {popular.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button size="small"
                            color="primary"
                            href={`movie/${popular.id}`}
                    >
                        View trailer
                    </Button>
            </CardActions>
        </Card>
    )
}