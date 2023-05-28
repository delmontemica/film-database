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
    BoxOffice?: string,
    Country?: string,
    DVD?: string,
    Director?: string,
    Genre?: string,
    Language?: string,
    Metascore?: string,
    Plot?: string,
    Poster?: string,
    Production?: string,
    Rated?: string,
    Ratings?: [],
    Released?: string,
    Runtime?: string,
    Title?: string,
    Website?: string,
    Writer?: string,
    Year?: string
}

export type SearchParams = {
    keyword: string,
    page: number
}