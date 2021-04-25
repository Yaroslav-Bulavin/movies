import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fade} from "@material-ui/core";
import {ResultCard} from "./ResultCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({

    search: {
        position: 'relative',
        width: "500px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        marginLeft: 0,
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            margin: "0 auto 60px",
            width: '500px',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));




export function Search() {

    const classes = useStyles();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            })
    };

    return (
        <>
            <Container maxWidth="md">
                <Grid container>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={query}
                            onChange={onChange}
                        />
                    </div>
                </Grid>
                    {results.length > 0 && (
                        <Grid container spacing={2}>
                            {results.map(movie => (
                                <Grid item xs={12} sm={6} md={4} key={movie.id}>
                                    <ResultCard movie={movie}/>
                                </Grid>
                            ))}
                        </Grid>
                    )}
            </Container>
        </>
    )
}