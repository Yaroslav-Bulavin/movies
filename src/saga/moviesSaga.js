import {put, call, takeEvery} from "redux-saga/effects"
import {actionIncrement, actionShowPopular} from "../redux/actions";
import {INCREMENT, POPULAR_MOVIES} from "../redux/types";

const fetchPopularMovies = () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* fetchPopularWorker() {
    const data = yield call(fetchPopularMovies);
    console.log(data)
    const json = yield call(data.json());
    console.log(json.results)
    yield put(actionShowPopular(json.results))
}

function* incrementWorker() {
    console.log(11111111)
    yield delay(2000);
    yield put(actionIncrement())
}

export function* moviesWatcher() {
    yield takeEvery(POPULAR_MOVIES, fetchPopularWorker);
    yield takeEvery(INCREMENT, incrementWorker)
}