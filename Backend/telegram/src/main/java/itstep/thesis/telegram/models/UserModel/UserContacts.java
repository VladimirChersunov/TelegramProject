package itstep.thesis.telegram.models.UserModel;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "userContacts")
public class UserContacts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;    
   
    @Column(name = "notificationStatus")
    private Boolean notificationStatus;

    @Column(name = "onlineStatus")
    private Boolean onlineStatus;
}
