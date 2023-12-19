import {Movie} from "../Movie.ts";
import styled from "styled-components";

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
                    <StyledArticle key={movie.id}><img src={posterImageUrl + movie.poster_path}
                                                       alt={"Poster of " + movie.original_title}/>
                        <section>
                            <p>{movie.original_title}</p>
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
