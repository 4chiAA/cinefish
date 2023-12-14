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

import java.util.Objects;

@RestController
@RequestMapping("/movies")
public class MovieController {


    // private WebClient webClient;

    @Value("${tmdb}")
    private String tmdbApiKey;


    /*@Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl("https://api.themoviedb.org/3/")
                .defaultHeader("Authorization: ", "Bearer " + tmdbApiKey)
                .build();
    }*/


    @GetMapping("/popular")
    public Movie getPopularMovies() {

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



/*@RestController
@RequestMapping("/movies")
public class MovieController {

    @Value("${tmdb}")
    private String tmdbApiKey;

    private final WebClient webClient;

    public MovieController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder
                .baseUrl("https://api.themoviedb.org/3/")
                .defaultHeader("Authorization", "Bearer " + tmdbApiKey)
                .build();
    }

    @GetMapping("/popular")
    public Mono<Movie> getPopularMovies() {
        return webClient.get()
                .uri("/movie/popular")
                .retrieve()
                .bodyToMono(Movie.class);
    }
}*/

