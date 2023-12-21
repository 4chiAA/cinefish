import MovieDetails from "../components/MovieDetails.tsx";
import {MovieDetail} from "../Movie.ts";
import NavBar from "../components/Navbar.tsx";

type DetailsPageProps = {
    movieDetails: MovieDetail | undefined | null
    fetchDataDetailPage: (id: number) => void
}

export default function DetailPage(props: DetailsPageProps) {
    return (
        <>
            <NavBar/>
            <MovieDetails movieDetails={props.movieDetails} fetchDataDetailPage={props.fetchDataDetailPage}/>
        </>
    )
}
