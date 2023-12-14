package codecracker.backend.Movie.Model;

import org.bson.io.BsonOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
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

        Movie popularMovie = Objects.requireNonNull(
                        WebClient.builder()
                                .baseUrl("https://api.themoviedb.org/3/")
                                .defaultHeader("Authorization", "Bearer " + tmdbApiKey)
                                .build()
                                .get()
                                .uri("/movie/popular")
                                .retrieve()
                                .toEntity(Movie.class)
                                .block())
                .getBody();
        return popularMovie;
    }

}





