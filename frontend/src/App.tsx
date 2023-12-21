import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Movie, MovieDetail} from "./Movie.ts";
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Newcomer from "./pages/Newcomer.tsx";
import Popular from "./pages/Popular.tsx";
import Favourite from "./pages/Favourite.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import NavBar from "./components/Navbar.tsx";


export default function App() {

    const [favMovies, setFavMovies] = useState<Movie[]>([])
    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [newcomerMovies, setNewcomerMovies] = useState<Movie[]>([])
    const [movieDetails, setMovieDetails] = useState<MovieDetail | undefined | null>(undefined)

    useEffect(() => {
        fetchDataPopular()
        fetchDataNewcomer()
        fetchFavMovies()
    }, []);

    function fetchFavMovies() {
        axios.get("/api/movies/favourite")
            .then(response => setFavMovies(response.data));
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

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={"/home"} element={<Home moviesPopular={popularMovies} moviesNewcomer={newcomerMovies}/>}/>
                <Route path={"/newcomer"} element={<Newcomer newcomerMovies={newcomerMovies}/>}/>
                <Route path={"/popular"} element={<Popular popularMovies={popularMovies}/>}/>
                <Route path={"/favourite"} element={<Favourite favouriteMovies={favMovies}/>}/>
                <Route path={"/:id"}
                       element={<DetailPage movieDetails={movieDetails} fetchDataDetailPage={fetchDataDetailPage}/>}/>
            </Routes>

        </>
    )
}

