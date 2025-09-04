import { call, put, takeLatest, delay } from "redux-saga/effects";

function* fetchData() {
    // PROBLEM: Without delay, API calls complete too fast for takeLatest to cancel previous requests
    // FIX: Add delay to simulate realistic API response time, allowing takeLatest cancellation to work
    yield delay(2000);
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

// PROBLEM STATEMENT:
// takeLatest was not working because:
// 1. Used async/await functions which can't be cancelled by Redux Saga
// 2. API calls completed too fast for cancellation to occur
// 3. Reducer was accumulating results instead of replacing them

// FIX PROVIDED:
// 1. Converted fetchData to generator function using yield call() for cancellable operations
// 2. Added delay() to simulate realistic API response time
// 3. Fixed reducer to replace state instead of accumulating results

function* rootSaga() {
    yield takeLatest('FETCH_PRODUCTS_SAGA', getProducstsSaga);
}

export default rootSaga;
