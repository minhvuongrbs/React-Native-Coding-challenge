import * as Type from './type'
export const getProductList = filter => {
    return {
        type: Type.UI_SAGA_GET_PRODUCT_LIST,
        filter: filter
    }
}
export const productListReceived = productList => {
    return {
        type: Type.SA_RE_PRODUCT_LIST_RECEIVED,
        productList: productList
    }
}

export const getProductDetail = sku => {
    return {
        type: Type.UI_SA_GET_PRODUCT_DETAIL,
        sku: sku
    }
}

export const ProductDetailReceived = productDetail => {
    return {
        type: Type.SA_RE_PRODUCT_DETAIL_RECEIVED,
        productDetail: productDetail
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
