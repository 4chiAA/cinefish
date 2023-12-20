package codecracker.backend.Movie.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Movie {
    private int id;
    private String title;
    private String overview;
    private String poster_path;
}







