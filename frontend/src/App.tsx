import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Movie, MovieDetail} from "./Movie.ts";
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Newcomer from "./pages/Newcomer.tsx";
import Popular from "./pages/Popular.tsx";
import DetailPage from "./pages/DetailPage.tsx";

export default function App() {


    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [newcomerMovies, setNewcomerMovies] = useState<Movie[]>([])
    const [movieDetails, setMovieDetails] = useState<MovieDetail>(Object)

    useEffect(() => {
        fetchDataPopular()
        fetchDataNewcomer()
        fetchDataDetailPage(3)
    }, []);

    const fetchDataPopular = () => {
        axios.get("/movies/popular")
            .then(response => setPopularMovies(response.data))
            .catch(error => {
                console.error("error information: ", error)
            })
    }

    const fetchDataNewcomer = () => {
        axios.get("/movies/newcomer")
            .then(response => setNewcomerMovies(response.data))
            .catch(error => {
                console.error("error information: ", error)
            })
    }

    const fetchDataDetailPage = (id:number) => {
        axios.get("movies/"+id)
            .then(response => setMovieDetails(response.data))
            .catch(error => {
                console.error("error information: ", error)
            })
    }

    return (
        <>

        <Routes>
            <Route path={"/home"} element={<Home moviesPopular={popularMovies} moviesNewcomer={newcomerMovies}/>}/>
            <Route path={"/newcomer"} element={<Newcomer newcomerMovies={newcomerMovies} />}/>
            <Route path={"/popular"} element={<Popular popularMovies={popularMovies} />}/>
        </Routes>
            <DetailPage movieDetails={movieDetails}/>
        </>
    )
}

