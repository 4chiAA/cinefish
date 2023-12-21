import {Movie} from "../Movie.ts";
import styled from "styled-components";
import FavButton from "./FavButton.tsx";
import {Link} from "react-router-dom";

type MovieListProps = {
    movies: Movie[]
    title: string
}

export default function MovieList(props: MovieListProps) {

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

    if (props.movies.length === 0) {
        return ("loading...")
    }

    return (
        <>
            <h1>{props.title}</h1>
            <StyledContainerSection>
                {props.movies.map((movie: Movie) => (
                    <StyledArticle key={movie.id}>
                        <Link to={"/" + movie.id}><img src={posterImageUrl + movie.poster_path}
                                                       alt={"Poster of " + movie.title}/>
                        </Link>
                        <section>
                            <FavButton movie={movie}/>
                            <Link to={"/" + movie.id}>{movie.title}</Link>
                            <p>{movie.overview}</p>
                        </section>
                    </StyledArticle>
                ))}
            </StyledContainerSection>
        </>
    )
}

const StyledContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const StyledArticle = styled.article`
  display: flex;
`
