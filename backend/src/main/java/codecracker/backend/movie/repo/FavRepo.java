package codecracker.backend.movie.repo;

import codecracker.backend.movie.model.MovieId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavRepo extends MongoRepository<MovieId, String> {
}
