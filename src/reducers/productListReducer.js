import { SA_RE_PRODUCT_LIST_RECEIVED } from '../actions/type'
export default productReducer = (state = '', action) => {
    switch (action.type) {
        case SA_RE_PRODUCT_LIST_RECEIVED:            
            return action.productList;
        default:
            return state;
    }
}