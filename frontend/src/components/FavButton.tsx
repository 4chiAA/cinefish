import axios from "axios";

export type FavButtonProps = {
    title: string
    id: number
}


export default function FavButton(props: FavButtonProps){


    const likeMovie = {
        movieId: props.id,
        title: props.title
    }

    function postFavourite() {
    axios.post('/api/favourite', likeMovie)
        .then(response => {
            console.log('POST erfolgreich:', response.data);
        })
        .catch(error => {
            console.error('Fehler beim POST:', error);
            // Hier kannst du mit dem Fehler umgehen
        });
    }

    return (
        <button onClick={postFavourite}>Like</button>
    )
}