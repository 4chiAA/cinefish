package codecracker.backend.Movie.Repo;

import codecracker.backend.Movie.Model.MovieId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavRepo extends MongoRepository<MovieId, String> {
}
