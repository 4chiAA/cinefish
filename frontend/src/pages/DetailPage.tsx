import {Genre, MovieDetail} from "../Movie.ts";

type DetailPageProps = {
    movieDetails: MovieDetail
}

export default function DetailPage(props: DetailPageProps) {


    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

    if (props.movieDetails === undefined) {
        return ("loading...");
    } else if (props.movieDetails === null) {
        return ("error")
    }

    return (
        <>
            <section>
                <img src={posterImageUrl + props.movieDetails.poster_path}
                     alt={"Poster of " + props.movieDetails.original_title}/>
                <p>{props.movieDetails.original_title}</p>
                {props.movieDetails.genres?.map((genre: Genre) => (
                    <p key={genre.id}>{genre.name}</p>
                ))}

                <p>{props.movieDetails.runtime}</p>
                <p>{props.movieDetails.release_date}</p>
                <p>{props.movieDetails.vote_average}</p>
            </section>

            <p>{props.movieDetails.overview}</p>

        </>
    )
}
