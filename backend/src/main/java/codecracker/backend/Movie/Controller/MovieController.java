package codecracker.backend.Movie.Controller;

import codecracker.backend.Movie.Model.Movie;
import codecracker.backend.Movie.Model.MovieDetail;
import codecracker.backend.Movie.Model.MovieId;
import codecracker.backend.Movie.Model.MovieResponse;
import codecracker.backend.Movie.Repo.FavRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/movies")

public class MovieController {

    @Autowired
    private WebClient webClient;

    @Autowired
    private FavRepo favRepo;

    @GetMapping("/popular")
    public List<Movie> getPopularMovies() {

        MovieResponse popularMovie = Objects.requireNonNull(
                        webClient
                                .get()
                                .uri("/movie/popular")
                                .retrieve()
                                .toEntity(MovieResponse.class)
                                .block())
                .getBody();

        return popularMovie.getResults();
    }

    @GetMapping("/newcomer")
    public List<Movie> getNewcomerMovies() {

        MovieResponse newcomerMovie = Objects.requireNonNull(

                        webClient
                                .get()
                                .uri("/movie/now_playing")
                                .retrieve()
                                .toEntity(MovieResponse.class)
                                .block())
                .getBody();

        return newcomerMovie.getResults();
    }



    @GetMapping("/{id}")
    public MovieDetail getMovieById(@PathVariable int id) {

        MovieDetail movieDetails = Objects.requireNonNull(

                        webClient
                                .get()
                                .uri("/movie/" + id)
                                .retrieve()
                                .toEntity(MovieDetail.class)
                                .block())
                .getBody();

        return movieDetails;
    }
/*
    @GetMapping("/favourite")
    public List<Movie> getFavouriteMovies() {




 */


}




