import { getAxiosClient } from 'api/index';

/**
 * Fetch movies based on search keyword.
 *
 * @param keyword
 */
export const fetchMoviesBySearch = (keyword: string) => {
    const restClient = getAxiosClient();
    return restClient.get('', { params: { s: keyword } });
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