type MovieListProps = {
    movies: Movie[]
    title: string
}

export default function MovieList(props: MovieListProps) {
    return (
        <>
        <h1>{props.title}</h1>



        </>
    )
}