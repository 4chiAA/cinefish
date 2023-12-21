export type Genre = {
    id: number,
    name: string
}

export type Movie = {
    id: number,
    title: string,
    poster_path: string,
    overview: string
}

export type MovieDetail = {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    genres: Genre[],
    release_date: string,
    runtime: number,
    vote_average: number
}
