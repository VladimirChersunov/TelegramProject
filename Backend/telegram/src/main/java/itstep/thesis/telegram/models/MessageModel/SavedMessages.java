package itstep.thesis.telegram.models.MessageModel;

import itstep.thesis.telegram.models.UserModel.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "savedMessage")
public class SavedMessages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)    
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "viewed")
    private Boolean viewed;

    @Column(name = "creationTime")
    private String creationTime;
}
