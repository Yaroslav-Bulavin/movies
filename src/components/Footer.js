
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    root: {
        width: 500,
        margin: "30px auto 0"
    },
});


export function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Typography component="p"
                        color="textSecondary"
                        variant="h6"
                        align="center">
                React MUI movies
            </Typography>
        </footer>
    )
}