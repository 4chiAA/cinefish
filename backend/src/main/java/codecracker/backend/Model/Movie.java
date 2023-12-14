package codecracker.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    private int id;
    private String original_title;
    private String overview;
    private String poster_path;
    private String release_date;
    private String title;


    public Movie(String original_title, String poster_path) {
        this.original_title = original_title;
        this.poster_path = poster_path;
    }


    
}

        





