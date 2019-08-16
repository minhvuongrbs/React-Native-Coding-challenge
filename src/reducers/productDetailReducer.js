import { SA_RE_PRODUCT_DETAIL_RECEIVED} from '../actions/type'
export default productReducer = (state = '', action) => {
    switch (action.type) {
        case SA_RE_PRODUCT_DETAIL_RECEIVED:
            return action.productDetail;
        default:
            return state;
    }
}