import {GET_PRODUCT_LIST} from '../actions/type'
export default productReducer = (state = '', action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return action.payload;
        default:
            return state;
    }
}