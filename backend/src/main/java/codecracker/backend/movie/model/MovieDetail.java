package codecracker.backend.movie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class MovieDetail {

    private int id;
    private String title;
    private String overview;
    private String poster_path;
    private String release_date;
    private List<MovieGenre> genres;
    private int runtime;
    private double vote_average;

}