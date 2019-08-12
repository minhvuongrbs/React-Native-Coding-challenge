export const getProductList = result => {
    return {
        type: 'GET_PRODUCT_LIST',
        payload: result
    }
}

export const getProductDetail = result => {
    return {
        type: 'GET_PRODUCT_DETAIL',
        payload: result
    }
}

