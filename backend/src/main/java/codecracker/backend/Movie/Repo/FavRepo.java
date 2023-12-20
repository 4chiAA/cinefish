package codecracker.backend.Movie.Repo;

import codecracker.backend.Movie.Model.MovieDetail;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavRepo extends MongoRepository<MovieDetail, String> {
}
