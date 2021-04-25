import {Grid} from "@material-ui/core";
import CardInCinema from "./CardInCinema";
import {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

const ShowsInCinema = () => {
    const [filmsInCinema, setfilmsInCinema] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&region=UA`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setfilmsInCinema(data.results);
            })
    }, []);

    console.log(filmsInCinema)
    return (
        <>
            <Grid container spacing={1}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {filmsInCinema.map(film => (
                    <Grid key={film.id}>
                        <SwiperSlide>
                            <CardInCinema film={film}/>
                        </SwiperSlide>
                    </Grid>
                ))}
                </Swiper>
            </Grid>
        </>
    )
}
export default ShowsInCinema;