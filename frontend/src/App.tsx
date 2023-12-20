import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Movie, MovieDetail} from "./Movie.ts";
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Newcomer from "./pages/Newcomer.tsx";
import Popular from "./pages/Popular.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import {MovieId} from "./MovieId.ts";

export default function App() {

    const [favMovieIds, setFavMovieIds] = useState<MovieId[]>([]);
    const [favMovies, setFavMovies] = useState<Movie[]>([])

    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [newcomerMovies, setNewcomerMovies] = useState<Movie[]>([])
    const [movieDetails, setMovieDetails] = useState<MovieDetail | undefined | null>(undefined)

    useEffect(() => {
        fetchDataPopular()
        fetchDataNewcomer()
        fetchDataDetailPage(3)
        fetchMovieIds()
    }, []);

    function fetchMovieIds(){
        axios.get("/api/favourite")
            .then(r => setFavMovieIds(r.data));
    }

    function fetFavMovies(){
        favMovieIds.map(favMovie => {
            axios.get("/api/movies/" + favMovie.movieId)
                .then(r => setFavMovies([...favMovies, r.data]))
        })
    }

    const fetchDataPopular = () => {
        axios.get("/api/movies/popular")
            .then(response => setPopularMovies(response.data))
            .catch(error => {
                console.error("error information: ", error)
            })
    }

    const fetchDataNewcomer = () => {
        axios.get("/api/movies/newcomer")
            .then(response => setNewcomerMovies(response.data))
            .catch(error => {
                console.error("error information: ", error)
            })
    }

    const fetchDataDetailPage = (id: number) => {
        axios.get("/api/movies/" + id)
            .then(response => setMovieDetails(response.data))
            .catch(error => {
                console.error("error information: ", error)
            })
    }

    console.log(favMovies);

    return (
        <>
            <button onClick={fetFavMovies}>Get Fav Movies</button>
            <Routes>
                <Route path={"/home"}
                       element={<Home moviesPopular={popularMovies} moviesNewcomer={newcomerMovies}/>}/>
                <Route path={"/newcomer"} element={<Newcomer newcomerMovies={newcomerMovies}/>}/>
                <Route path={"/popular"} element={<Popular popularMovies={popularMovies}/>}/>
            </Routes>
            <DetailPage movieDetails={movieDetails}/>
        </>
    )
}

