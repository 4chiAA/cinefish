import {Movie} from "../Movie.ts"
import MovieList from "../components/MovieList.tsx";

type MovieListProps = {
    popularMovies: Movie[]
}

export default function Newcomer(props:MovieListProps) {
    return (
        <>
            <MovieList movies={props.popularMovies} title={"Popular"}/>

        </>
    )
}