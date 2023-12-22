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
            <StyledHeader>{props.title}</StyledHeader>
            <StyledContainerSection>
                {props.movies.map((movie: Movie) => (
                    <StyledArticle key={movie.id}><StyledImageWrapper>
                        <Link to={"/" + movie.id}><StyledImage src={posterImageUrl + movie.poster_path}
                                                               alt={"Poster of " + movie.title}/>
                        </Link>
                        <FavButton movie={movie}/>
                    </StyledImageWrapper>
                        <StyledInfoWrapper>
                            <StyledLink to={"/" + movie.id}>{movie.title}</StyledLink>
                            {movie.overview}
                        </StyledInfoWrapper>
                    </StyledArticle>
                ))}
            </StyledContainerSection>
        </>
    )
}

const StyledHeader = styled.h1`
  @media (min-width: 768px) {
    margin: 80px 40px 20px 40px;
  }`

const StyledContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    margin: 0 40px;
  }
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledImageWrapper = styled.div`

  @media (min-width: 768px) {
    width: 15%;
    flex-shrink: 0;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.4em;

  &:hover {
    text-decoration: underline;
  }
`


