package codecracker.backend.Movie.Controller;

import codecracker.backend.Movie.Service.FavService;
import codecracker.backend.Movie.Model.MovieId;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/favourite")
@RequiredArgsConstructor
public class FavController {

    private final FavService service;

    @PostMapping
    public MovieId saveFavouriteMovie(@RequestBody MovieId favoriteMovie) {
        return service.saveFavouriteMovie(favoriteMovie);
    }
}
