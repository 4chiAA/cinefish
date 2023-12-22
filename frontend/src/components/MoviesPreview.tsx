import {Movie} from "../Movie.ts";
import styled from "styled-components"
import {Link} from "react-router-dom";

type MoviesPreviewProps = {
    movies: Movie[]
    title: string
}
export default function MoviesPreview(props: MoviesPreviewProps) {

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

    if (props.movies.length === 0) {
        return ("loading...")
    }

    return (
        <>
            <StyledHeader><StyledTitleLink to={"/" + props.title.toLowerCase()}>{props.title}</StyledTitleLink></StyledHeader>
            <StyledSection>
                {props.movies.slice(0, 4).map((movie: Movie) => (
                    <StyledArticle key={movie.id}>

                        <StyledImage src={posterImageUrl + movie.poster_path} alt={"Poster of " + movie.title}/>
                       <span>{movie.title}</span>
                    </StyledArticle>
                ))}
            </StyledSection>
        </>
    )
}

const StyledHeader = styled.h1`
  @media (min-width: 768px) {
    margin: 80px 40px 20px 40px;
  }`

const StyledTitleLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const StyledSection = styled.section`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  width: 150vw;

  @media (min-width: 768px) {
    padding: 0 40px;
      }
\`
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  font-weight: bold;
  `;

const StyledImage = styled.img`
  width: 100%;
`