import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchProducts() {
  const json = yield fetch('http://localhost:3004/prodcuts').then(response => response.json())
            .then(data => data);  
  yield put({ type: "LOAD_PRODUCTS", payload: json});
}

function* actionWatcher() {
     yield takeLatest('FETCH_DATA', fetchProducts)
}

export default function* rootSaga() {
   yield all([
	actionWatcher(),
   ]);
}
