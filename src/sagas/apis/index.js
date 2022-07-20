import axios from 'axios';

export default axios.create({
    baseURL: 'https://listing-stg.services.teko.vn/api/'
});