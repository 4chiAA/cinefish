package codecracker.backend.Movie.Repo;

import codecracker.backend.Movie.Model.MovieId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavRepo extends MongoRepository<MovieId, String> {

}
