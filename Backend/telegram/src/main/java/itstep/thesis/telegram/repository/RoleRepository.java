package itstep.thesis.telegram.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import itstep.thesis.telegram.models.RoleModel.ERole;
import itstep.thesis.telegram.models.RoleModel.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
