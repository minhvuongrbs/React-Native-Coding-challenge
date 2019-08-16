import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import * as Type from './actions/type';
import API from './api'

function fetchProductList(filter) {
    return API.get('search/?channel=pv_online&visitorId=&q=' + filter + '&terminal=cp01')
        .then(result => result.data)
        .catch(error => console.log(error));
}

function fetchProductDetail(sku) {
    return API.get('products/' + sku)
        .then(result => result.data)
        .catch(error => console.log(error));
}

function* getProductList(action) {
    const response = yield call(fetchProductList, action.filter);
    yield put({ type: Type.SA_RE_PRODUCT_LIST_RECEIVED, productList: response.result.products })
}

function* getProductDetail(action) {
    const response = yield call(fetchProductDetail, action.sku);
    yield put({ type: Type.SA_RE_PRODUCT_DETAIL_RECEIVED, productDetail: response.result.product })
}






function* watchGetProductList() {
    yield takeEvery(Type.UI_SAGA_GET_PRODUCT_LIST, getProductList)
}

function* watchGetProductDetail() {
    yield takeEvery(Type.UI_SA_GET_PRODUCT_DETAIL, getProductDetail)
}

export default function* rootSaga() {
    yield all([
        yield fork(watchGetProductList),
        yield fork(watchGetProductDetail)
    ])
}