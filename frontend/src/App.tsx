import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Movie} from "./Movie.ts";
import Home from "./components/Home.tsx";
import {Route, Routes} from "react-router-dom";


export default function App() {


    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [newcomerMovies, setNewcomerMovies] = useState<Movie[]>([])

    useEffect(() => {
        fetchDataPopular()
        fetchDataNewcomer()
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



    return (
        <Routes>
            <Route path={"/home"} element={<Home moviesPopular={popularMovies} moviesNewcomer={newcomerMovies}/>}/>
        </Routes>
    )
}

