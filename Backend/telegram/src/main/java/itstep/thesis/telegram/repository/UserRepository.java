package itstep.thesis.telegram.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import itstep.thesis.telegram.models.UserModel.User;



public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailAndPhone(String email, String phone);
    
    Optional<User> findByUsername(String name);

	Boolean existsByUsername(String name);

	Boolean existsByEmail(String email);

}
