import MoviesPreview from "./MoviesPreview.tsx"
import {Movie} from "../Movie.ts";

type MoviesPreviewProps= {
    moviesPopular: Movie[]
    moviesNewcomer: Movie[]
}



export default function Home(props:MoviesPreviewProps) {

return(
    <>
    <MoviesPreview movies={props.moviesPopular} title={"Popular Movies"}/>
    <MoviesPreview movies={props.moviesNewcomer} title={"Newcomer Movies"}/>
    </>

)
}