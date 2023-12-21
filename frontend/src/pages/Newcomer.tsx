import {Movie} from "../Movie.ts"
import MovieList from "../components/MovieList.tsx";
import NavBar from "../components/Navbar.tsx";

type MovieListProps = {
    newcomerMovies: Movie[]
}

export default function Newcomer(props: MovieListProps) {
    return (
        <>
            <NavBar/>
            <MovieList movies={props.newcomerMovies} title={"Newcomer"}/>
        </>
    )
}