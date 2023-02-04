package itstep.thesis.telegram.models.UserModel;
import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "blacklist")
public class BlackList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   
}
