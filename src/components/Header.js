import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {actionIncrement} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";


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

    const count = useSelector(state => state.movies.count)
    console.log(count)
    const dispatch = useDispatch();

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
                <div style={{display: "flex"}}>
                    <p>{count}</p>
                    <button onClick={() => dispatch(actionIncrement())}>increment</button>
                </div>
            </Container>
        </AppBar>
    )
}