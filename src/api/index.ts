import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Call axios create without token on the Header
 **/
export const getAxiosClient = () => {
    return axios.create({
        baseURL: BASE_URL,
        params: {
            apikey: API_KEY,
            type: 'movie'
        }
    });
};