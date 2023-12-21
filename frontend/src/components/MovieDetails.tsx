import {Genre, MovieDetail} from "../Movie.ts";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import FavButton from "./FavButton.tsx";

type DetailProps = {
    movieDetails: MovieDetail | undefined | null
    fetchDataDetailPage: (id: number) => void
}

export default function MovieDetails(props: DetailProps) {

    const {id} = useParams();

    useEffect(() => {
        props.fetchDataDetailPage(Number(id))
    }, []);

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

    if (props.movieDetails === undefined) {
        return ("loading...");
    } else if (props.movieDetails === null) {
        return ("error")
    }

    return (
        <>
            <StyledHeader>{props.movieDetails.title}</StyledHeader>
            <FavButton movieDetail={props.movieDetails}/>
            <StyledContainerArticle>

                <StyledImageWrapper>
                    <StyledImage src={posterImageUrl + props.movieDetails.poster_path}
                                 alt={"Poster of " + props.movieDetails.title}/>
                </StyledImageWrapper>
                <StyledInfoSectionMedia>
                    <StyledInfoSection>
                        <StyledList>
                            {props.movieDetails.genres?.map((genre: Genre) => (
                                <StyledListElement key={genre.id}>{genre.name}</StyledListElement>
                            ))}
                        </StyledList>
                        <StyledParagraph>
                            <span>Runtime: {props.movieDetails.runtime}min</span>
                            <span>Release Date: {props.movieDetails.release_date}</span>
                            <span>Score: {props.movieDetails.vote_average}</span>
                        </StyledParagraph>
                    </StyledInfoSection>
                    <StyledDetailsParagraph>{props.movieDetails.overview}</StyledDetailsParagraph>
                </StyledInfoSectionMedia>
            </StyledContainerArticle>
        </>
    )
}


const StyledInfoSectionMedia = styled.section`
  @media (min-width: 768px) {
  }
`

const StyledContainerArticle = styled.article`
  @media (min-width: 768px) {
    display: flex;
    gap: 40px;
    padding: 0 40px;
  }`

const StyledHeader = styled.h1`
  @media (min-width: 768px) {
    margin: 0 40px 20px 40px;
  }
`

const StyledImageWrapper = styled.div`
  @media (min-width: 768px) {
    width: 40%;
    flex-shrink: 0;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const StyledInfoSection = styled.section`
  width: 100%
`

const StyledList = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  font-weight: bold;
  justify-content: flex-end;
  flex-wrap: wrap;
`

const StyledListElement = styled.li`
  list-style: none;
`

const StyledParagraph = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 0.5em;
  align-items: flex-end;
`

const StyledDetailsParagraph = styled.p`
  text-align: justify;
`
