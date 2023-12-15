import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Movie} from "./Movie.ts";
import Home from "./components/Home.tsx";
import {Route, Routes} from "react-router-dom";

export default function App() {

    const baseURL: string = "/movies/popular"
    const [popularMovies, setPopularMovies] = useState<Movie[]>([])

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        axios.get(baseURL)
            .then(response => setPopularMovies(response.data))
            .catch(error => {
                console.error("error information: ", error)
            })
    }

    return (
        <>
            <Routes>
                <Route path={"/home"} element={<Home movies={popularMovies}/>}/>
            </Routes>
        </>
    )
}
