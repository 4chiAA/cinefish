package codecracker.backend.Movie.Service;

import codecracker.backend.Movie.Repo.FavRepo;
import codecracker.backend.Movie.Model.MovieDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FavService {

    private final FavRepo repo;

    public MovieDetail saveFavouriteMovie(MovieDetail favouriteMovie) {
        return repo.save(favouriteMovie);
    }
}
