import {Movie} from "../Movie.ts"
import MovieList from "../components/MovieList.tsx";
import NavBar from "../components/Navbar.tsx";

type MovieListProps = {
    popularMovies: Movie[]
}

export default function Popular(props: MovieListProps) {
    return (
        <>
            <NavBar/>
            <MovieList movies={props.popularMovies} title={"Popular"}/>
        </>
    )
}