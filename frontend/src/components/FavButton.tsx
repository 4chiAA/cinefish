import axios from "axios";
import {Movie, MovieDetail} from "../Movie.ts";

export type FavButtonProps = {
    movie?: Movie
    movieDetail?: MovieDetail
}

export default function FavButton(props: FavButtonProps){

    const likeMovie = {
        title: props.movie?props.movie.title:props.movieDetail?.title,
        movieId: props.movie?props.movie.id:props.movieDetail?.id
    }

    function postFavourite() {
    axios.post('/api/favourite', likeMovie)
        .then(response => {
            console.log('POST erfolgreich:', response.data);
        })
        .catch(error => {
            console.error('Fehler beim POST:', error);
        });
    }

    function deleteFavourite() {
        const id = props.movie?props.movie.id:props.movieDetail?.id
        axios.delete("/api/favourite/" + id)

            .then(response => {
                console.log('Film gelöscht:', response.data);
            })
            .catch(error => {
                console.error('Fehler beim Löschen des Films:', error);
            });
    }

    return (
        <>
        <button onClick={postFavourite}>Like</button>
        <button onClick={deleteFavourite}>Dislike</button>
        </>
    )
}