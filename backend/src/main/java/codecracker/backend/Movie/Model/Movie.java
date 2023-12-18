package codecracker.backend.Movie.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Movie {
    private int id;
    private String original_title;
    private String overview;
    private String poster_path;
    private String release_date;
    private List<MovieGenre> genres;
    private int runtime;
}







