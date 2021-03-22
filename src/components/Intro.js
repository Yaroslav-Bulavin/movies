import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "600px",
        marginBottom: theme.spacing(4),
        paddingTop: theme.spacing(8)
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,.6)"
    },
    mainFeaturesPostContent: {
        position: "relative",
        paddingTop: "145px",
        width: "100%",
        maxWidth: "800px",
        textAlign: "center",
        margin: "0 auto"
    },
    introTitle: {
        marginBottom: theme.spacing(4)
    },
    introText: {
        marginBottom: theme.spacing(4)
    }

}));

export function Intro() {
    const classes = useStyles();

    return (
        <main>
            <Paper className={classes.mainFeaturesPost}
                   style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
                   square>

                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={12}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom
                                    className={classes.introTitle}>
                                    Movies website
                                </Typography>
                                <Typography
                                    component="h5"
                                    color="inherit"
                                    paragraph
                                    className={classes.introText}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur dolorum eaque ex laborum minus nostrum provident quibusdam?
                                    Asperiores autem consectetur doloremque,
                                    doloribus illo nam neque praesentium repellat repellendus reprehenderit tempore!
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large">
                                    Learn more
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </main>
    )
}