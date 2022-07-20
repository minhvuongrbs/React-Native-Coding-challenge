import { combineReducers } from 'redux';
import productListReducer from './productListReducer';
import productDetailReducer from './productDetailReducer'

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer
});

export default rootReducer;
