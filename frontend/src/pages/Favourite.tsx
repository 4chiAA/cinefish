import {Movie} from "../Movie.ts"
import MovieList from "../components/MovieList.tsx";
import NavBar from "../components/Navbar.tsx";

type FavouriteListProps = {
    favouriteMovies: Movie[]
}

export default function Favourite(props: FavouriteListProps) {
    return (
        <>
            <NavBar/>
            <MovieList movies={props.favouriteMovies} title={"Favourites"}/>
        </>
    )
}