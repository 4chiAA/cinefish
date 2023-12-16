import {Movie} from "../Movie.ts";
import styled from "styled-components"
import {Link} from "react-router-dom";

type MoviesPreviewProps = {
    movies: Movie[]
    title: string
}


export default function MoviesPreview(props: MoviesPreviewProps) {

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"


    return (
        <>
            <StyledTitleLink to={"/" + props.title.toLowerCase()}><h1>{props.title}</h1></StyledTitleLink>
            <StyledSection>
                {props.movies.slice(0, 4).map((movie: Movie) => (
                    <StyledArticle key={movie.id}>
                        <img src={posterImageUrl + movie.poster_path} alt={"Poster of " + movie.title}/>
                        {movie.title}
                    </StyledArticle>
                ))}
            </StyledSection>
        </>
    )
}

const StyledSection = styled.section`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledTitleLink = styled(Link)`
  color: #fff;
`;