export type Genre = {
    id: number,
    name: string
}

export type Movie = {
    id: number,
    original_title: string,
    poster_path: string,
    overview: string
}

export type MovieDetail = {
    id: number,
    original_title: string,
    poster_path: string,
    overview: string,
    genres: Genre[],
    release_date: string,
    runtime: number,
    vote_average: number
}
