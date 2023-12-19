package codecracker.backend.Movie.Model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavRepo extends MongoRepository<MovieDetail, String> {
}
