package codecracker.backend.Movie.Controller;

import codecracker.backend.Movie.Service.FavService;
import codecracker.backend.Movie.Model.MovieId;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favourite")
@RequiredArgsConstructor
public class FavController {

    private final FavService service;

    @GetMapping
    public List<MovieId> getFavouriteMovies(){
        return service.getFavouriteMovies();
    }

    @PostMapping
    public MovieId saveFavouriteMovie(@RequestBody MovieId favoriteMovie) {
        return service.saveFavouriteMovie(favoriteMovie);
    }
}
