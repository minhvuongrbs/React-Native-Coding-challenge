import { GET_SUGGESTED_PRODUCT, REMOVE_SUGGESTED_PRODUCT } from '../actions/type'
export default productReducer = (state = '', action) => {
    switch (action.type) {
        case GET_SUGGESTED_PRODUCT:
            return action.payload;
        case REMOVE_SUGGESTED_PRODUCT:
            return '';
        default:
            return state;
    }
}