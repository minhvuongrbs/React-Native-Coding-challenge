import API from './index';

export function fetchProductList(filter) {
    return API.get('search/?channel=pv_online&visitorId=&q=' + filter + '&terminal=cp01')
        .then(result => result.data)
        .catch(error => console.log(error));
}

export function fetchProductDetail(sku) {
    return API.get('products/' + sku)
        .then(result => result.data)
        .catch(error => console.log(error));
}