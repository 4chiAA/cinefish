import MoviesPreview from "../components/MoviesPreview.tsx"
import {Movie} from "../Movie.ts";
import NavBar from "../components/Navbar.tsx";

type MoviesPreviewProps = {
    moviesPopular: Movie[]
    moviesNewcomer: Movie[]
}

export default function Home(props: MoviesPreviewProps) {

    return (
        <>
            <NavBar/>
            <MoviesPreview movies={props.moviesPopular} title={"Popular"}/>
            <MoviesPreview movies={props.moviesNewcomer} title={"Newcomer"}/>
        </>

    )
}