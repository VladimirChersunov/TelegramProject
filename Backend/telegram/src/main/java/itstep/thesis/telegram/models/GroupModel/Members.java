package itstep.thesis.telegram.models.GroupModel;

import itstep.thesis.telegram.models.RoleModel.Role;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "members")
public class Members {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;
}
