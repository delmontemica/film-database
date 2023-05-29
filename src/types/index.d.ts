export type Movies = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export type Movie = {
    Actors?: string,
    Awards?: string,
    Country?: string,
    Director?: string,
    Genre?: string,
    Language?: string,
    Plot?: string,
    Poster?: string,
    Rated?: string,
    Released?: string,
    Runtime?: string,
    Title?: string,
    Writer?: string,
    Year?: string,
    imdbID?: string,
    Type?: string
}

export type SearchParams = {
    keyword: string,
    page: number
}