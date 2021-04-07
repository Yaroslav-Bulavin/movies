import React, {useEffect, useState} from "react";
import YouTube from 'react-youtube';
import {Header} from "./Header";
import {Container, makeStyles, withMobileDialog} from "@material-ui/core";

const useStyles = makeStyles({
    video: {
        width: "100%"
    },
    title: {
        textAlign: "center",
        fontSize: "40px",
        paddingTop: "80px"
    },
    textAlign: {
        textAlign: "left"
    },
    flexBlocks: {
        display: "flex"
    },
    mr: {
        marginRight: "30px"
    },

});

export function MoviePage(props) {

    const movieId = props.match.params.id;
    const classes = useStyles();
    const [trailerUrl, setTrailerUrl] = useState([]);
    const [trailerInfo, setTrailerInfo] = useState([]);

    console.log(props.match.params.id);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setTrailerUrl(data.results);

            });

    }, [movieId]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTrailerInfo(data);

            });

    }, [movieId]);



    const opts = {
        height: "390px",
        width: "800px",
        playerVar: {
            autoplay: 1
        }
    };

    return (
        <>
            <Header/>
                <h1 className={classes.title}>{trailerInfo.title}</h1>
                {trailerUrl.length !== 0 ? <YouTube opts = {opts} videoId = {trailerUrl[0].key} className={classes.video} /> : <h1>Loading...</h1>}
                <Container maxWidth="md" className={classes.flexBlocks}>
                    <div className={classes.mr}>
                        <img src={`https://image.tmdb.org/t/p/w200${trailerInfo.poster_path}`}
                             alt=""
                        />
                    </div>
                    <div className={classes.textAlign}>
                        <h3>Description:</h3>
                        <p>{trailerInfo.overview}</p>
                        <div>
                            <span>Rating: </span>
                            <span>{trailerInfo.vote_average} / 10</span>
                        </div>
                        <div>
                            <span>Duration: </span>
                            <span>{trailerInfo.runtime} minutes</span>
                        </div>
                        <div>
                            <span>Release Date: </span>
                            <span>{trailerInfo.release_date}</span>
                        </div>
                        <div>
                            <span>Status: </span>
                            <span>{trailerInfo.status}</span>
                        </div>
                        <div>
                            <span>Budget of the movie: </span>
                            <span>{trailerInfo.budget}$</span>
                        </div>
                    </div>

                </Container>

        </>
    )
}