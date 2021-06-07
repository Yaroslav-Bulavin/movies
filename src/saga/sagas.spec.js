import test from 'tape'
import {fetchPopularWorker} from "./moviesSaga";

test('fetchPopularWorker Saga test', (assert) => {
    const gen = fetchPopularWorker()
    assert.deepEqual(
        gen.next(),
)
})