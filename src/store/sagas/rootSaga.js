import { call, put, takeLatest, delay } from "redux-saga/effects";

function* fetchData() {
    const data = yield call(fetch, 'https://dummyjson.com/products/category/smartphones');
    const responseJson = yield call([data, 'json']);
    return responseJson;
}

function* getProducstsSaga() {
    try {
        const response = yield call(fetchData);
        yield put({ type: 'SHOW_SAGA_PRODUCTS', payload: response.products });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function* rootSaga() {
    yield takeLatest('FETCH_PRODUCTS_SAGA', getProducstsSaga);
}

export default rootSaga;
