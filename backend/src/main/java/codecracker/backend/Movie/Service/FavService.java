package codecracker.backend.Movie.Service;

import codecracker.backend.Movie.Repo.FavRepo;
import codecracker.backend.Movie.Model.MovieId;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavService {

    private final FavRepo repo;

    public MovieId saveFavouriteMovie(MovieId favouriteMovie) {
        return repo.save(favouriteMovie);
    }

    public List<MovieId> getFavouriteMovies() {
        return repo.findAll();
    }
}
