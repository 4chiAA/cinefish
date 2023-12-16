import {Movie} from "../Movie.ts"
import MovieList from "../components/MovieList.tsx";

type MovieListProps = {
    newcomerMovies: Movie[]
}

export default function Newcomer(props:MovieListProps) {
    return (
        <>
        <MovieList movies={props.newcomerMovies} title={"Newcomer"}/>

        </>
    )
}