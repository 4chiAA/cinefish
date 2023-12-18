import {MovieDetail} from "../Movie.ts";

type DetailPageProps = {
    movieDetails: MovieDetail
}

export default function DetailPage(props: DetailPageProps) {

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

    return (
        <>
            <img src={posterImageUrl+props.movieDetails.poster_path} alt={"Poster of " + props.movieDetails.original_title}/>
            <p>{props.movieDetails.original_title}</p>
            <p>{props.movieDetails.overview}</p>
            <p>{props.movieDetails.runtime}</p>
            <p>{props.movieDetails.release_date}</p>
            <p>{props.movieDetails.vote_average}</p>
            <p></p>
        </>
    )
}