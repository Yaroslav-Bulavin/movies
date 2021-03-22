import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    }
}));

export function Header({changeStateOpen}) {
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Movies</Typography>
                    <Box mr={1}>
                        <Button color="inherit" variant="outlined" onClick={changeStateOpen}>Log in</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}