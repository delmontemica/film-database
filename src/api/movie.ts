import { getAxiosClient } from 'api/index';
import { SearchParams } from 'types';

/**
 * Fetch movies based on search keyword.
 *
 * @param data
 */
export const fetchMoviesBySearch = (data: SearchParams) => {
    const { keyword, page } = data;
    const restClient = getAxiosClient();
    return restClient.get('', { params: { s: keyword, page: page } });
}

/**
 * Fetch movies based on ID.
 *
 * @param id
 */
export const fetchMoviesByID = (id: string) => {
    const restClient = getAxiosClient();
    return restClient.get('', { params: { i: id } });
}