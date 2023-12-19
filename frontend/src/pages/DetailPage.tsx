import {Genre, MovieDetail} from "../Movie.ts";
import styled from "styled-components";

type DetailPageProps = {
    movieDetails: MovieDetail | undefined | null
}

export default function DetailPage(props: DetailPageProps) {

    const posterImageUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

    if (props.movieDetails === undefined) {
        return ("loading...");
    } else if (props.movieDetails === null) {
        return ("error")
    }

    return (
        <>
            <StyledContainerSection>
                <StyledImageWrapper>
                    <StyledImage src={posterImageUrl + props.movieDetails.poster_path}
                                 alt={"Poster of " + props.movieDetails.title}/>
                </StyledImageWrapper>
                <StyledInfoTitleSection>
                    <StyledTitleParagraph>{props.movieDetails.title}</StyledTitleParagraph>
                    <StyledInfoSection>
                        <p>Genre</p>
                        <ul>
                            {props.movieDetails.genres?.map((genre: Genre) => (

                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                        <p>Runtime</p>
                        <p>       {props.movieDetails.runtime}</p>
                        <p> Release Date</p>
                        <p>{props.movieDetails.release_date}</p>
                        <p>Score</p>
                        <p>                        {props.movieDetails.vote_average}</p>
                    </StyledInfoSection>
                </StyledInfoTitleSection>
            </StyledContainerSection>


            <p>{props.movieDetails.overview}</p>
        </>
    )
}

const StyledContainerSection = styled.section`
    display: flex;
    flex-direction: row;
    margin: 10px;
height: 300px;
`
const StyledInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    max-height: 80%;
    align-items: center;
    font-size: 0.4em
`
const StyledTitleParagraph = styled.p`
    display: flex;
    text-align: center;
`
const StyledInfoTitleSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const StyledImageWrapper = styled.div`
    width: 50%;
    overflow: hidden;
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    display: block;

`

