package codecracker.backend.Movie.Model;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavService {

    private final FavRepo repo;

    public MovieDetail saveFavouriteMovie(MovieDetail favouriteMovie) {
        return repo.save(favouriteMovie);
    }
}
