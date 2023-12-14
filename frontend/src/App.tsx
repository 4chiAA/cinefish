
import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

export default function App() {

  const baseURL: string = "/movies/popular"
  const [popularMovies, setPopularMovies] = useState<object[]>([])

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
      axios.get(baseURL)
          .then(response => setPopularMovies(response.data))
          .catch(error => {console.error("error information: ", error)})
  }

  console.log(popularMovies)

  return (
    <>
      <div>{}</div>

    </>
  )
}
