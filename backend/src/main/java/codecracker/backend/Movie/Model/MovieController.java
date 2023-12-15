package codecracker.backend.Movie.Model;

import org.bson.io.BsonOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/movies")

public class MovieController {

    @Autowired
    private WebClient webClient;


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

}




