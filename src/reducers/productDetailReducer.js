import {GET_PRODUCT_DETAIL} from '../actions/type'
export default productReducer = (state = '', action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return action.payload;
        default:
            return state;
    }
}