import PopularMovies from "./PopularMovies.tsx"
import {Movie} from "../Movie.ts";

type PopularMoviesProps = {
    movies: Movie[]
}

export default function Home(props:PopularMoviesProps) {

return(
    <>
    <PopularMovies movies={props.movies}/>
    </>

)
}