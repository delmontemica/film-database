export type Movies = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export type Movie = {
    Title: string
}

export type SearchParams = {
    keyword: string,
    page: number
}