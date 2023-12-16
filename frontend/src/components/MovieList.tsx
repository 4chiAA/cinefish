import {Movie} from "../Movie.ts";

type MovieListProps = {
    movies: Movie[]
    title: string
}

export default function MovieList(props: MovieListProps) {

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

    return (
        <>
            <h1>{props.title}</h1>
            <section>
                {props.movies.map((movie: Movie) => (
                    <article key={movie.id}><img src={posterImageUrl + movie.poster_path}
                                                 alt={"Poster of " + movie.title}/>
                        {movie.title}
                        {movie.overview}
                    </article>
                ))}
            </section>
        </>
    )
}