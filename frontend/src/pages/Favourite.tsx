import {Movie} from "../Movie.ts"
import MovieList from "../components/MovieList.tsx";

type FavouriteListProps = {
    favouriteMovies: Movie[]
}

export default function Favourite(props: FavouriteListProps) {
    return (
        <>
            <MovieList movies={props.favouriteMovies} title={"Favourites"}/>
        </>
    )
}