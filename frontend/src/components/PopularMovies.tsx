import {Movie} from "../Movie.ts";

type popularMoviesProps = {
   movies: Movie[]
}

export default function PopularMovies(props: popularMoviesProps) {

   const posterImageUrl:string = "https://image.tmdb.org/t/p/w440_and_h660_face"


   return (
       <>
           {props.movies.map((movie: Movie) => (
               <p key={movie.id}>
                   <img src={posterImageUrl + movie.poster_path} alt={"Poster of " + movie.title}/>
                   {movie.title}
               </p>
           ))}

       </>
   )
}