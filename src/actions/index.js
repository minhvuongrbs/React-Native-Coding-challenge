import * as Type from './type'
export const getProductList = result => {
    return {
        type: Type.GET_PRODUCT_LIST,
        payload: result
    }
}

export const getProductDetail = result => {
    return {
        type: Type.GET_PRODUCT_DETAIL,
        payload: result
    }
}

export const getSuggestedProduct = payload => {
    return {
        type: Type.GET_SUGGESTED_PRODUCT,
        payload: payload
    }
}
export const removeSuggestedProduct = () => {
    return {
        type: Type.REMOVE_SUGGESTED_PRODUCT
    }
}
