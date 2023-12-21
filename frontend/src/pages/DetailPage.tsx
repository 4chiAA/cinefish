import MovieDetails from "../components/MovieDetails.tsx";
import {MovieDetail} from "../Movie.ts";

type DetailsPageProps = {
    movieDetails: MovieDetail | undefined | null
    fetchDataDetailPage: (id: number) => void
}

export default function DetailPage(props: DetailsPageProps) {
    return (
        <MovieDetails movieDetails={props.movieDetails} fetchDataDetailPage={props.fetchDataDetailPage}/>
    )
}
