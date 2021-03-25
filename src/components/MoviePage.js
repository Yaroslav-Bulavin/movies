import React, {useEffect, useState} from "react";
import YouTube from 'react-youtube';

export function MoviePage(props) {

    const movieId = props.match.params.id;
    const [trailerUrl, setTrailerUrl] = useState([]);
    const [trailerInfo, setTrailerInfo] = useState({});

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
                console.log(data.results);
                setTrailerInfo(data.results);

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
            {console.log(1)}
            <h1>{trailerInfo.title}</h1>;
            {trailerUrl.length !== 0 ? <YouTube opts = {opts} videoId = {trailerUrl[0].key} /> : <h1>Loading...</h1>}
        </>
    )
}