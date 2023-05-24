import axios, { AxiosError, AxiosResponse } from 'axios';
import { store } from 'app/store';
import { isDevMode } from 'lib/utils';

const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Call axios.create without token on the header
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

export const getErrorMessage = (error: AxiosError, fields = false) => {
    const { status, data }: { status?: number, data?: any } = (error.response as AxiosResponse) || {};
    if (status && status < 500) {
        return fields ? data.errors : data.message;
    }
    if (isDevMode()) console.error(error);
    return 'Server Error';
};