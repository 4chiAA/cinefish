package codecracker.backend.movie.service;

import codecracker.backend.movie.repo.FavRepo;
import codecracker.backend.movie.model.MovieId;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FavService {

    private final FavRepo repo;

    public MovieId saveFavouriteMovie(MovieId favouriteMovie) {
        return repo.save(favouriteMovie);
    }
}
