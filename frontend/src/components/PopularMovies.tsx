import {Movie} from "../Movie.ts";
import styled from "styled-components"

type popularMoviesProps = {
    movies: Movie[]
}

export default function PopularMovies(props: popularMoviesProps) {

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"


    return (
        <StyledSection>
            {props.movies.slice(0,4).map((movie: Movie) => (
                <StyledArticle key={movie.id}>
                    <img src={posterImageUrl + movie.poster_path} alt={"Poster of " + movie.title}/>
                    {movie.title}
                </StyledArticle>
            ))}
        </StyledSection>
    )
}

const StyledSection = styled.section`
  display: flex;
  gap: 20px;
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;