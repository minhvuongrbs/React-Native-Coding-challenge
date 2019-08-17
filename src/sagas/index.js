import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import * as Type from '../actions/type';
import * as Apis from './apis/product';

function* getProductList(action) {
    const response = yield call(Apis.fetchProductList, action.filter);
    yield put({ type: Type.SA_RE_PRODUCT_LIST_RECEIVED, productList: response.result.products })
}

function* getProductDetail(action) {
    const response = yield call(Apis.fetchProductDetail, action.sku);
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