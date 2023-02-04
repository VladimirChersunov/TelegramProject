package itstep.thesis.telegram.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import itstep.thesis.telegram.models.UserModel.User;
import itstep.thesis.telegram.repository.UserRepository;
import lombok.Data;

// UserService.java, который содержит все методы для обработки операций CRUD
//  с репозиторием и возврата ответа в UserController.java.

@Service//аннотация используется для обозначения класса как поставщика услуг, который предоставляет некоторые бизнес-функции.
@Data
public class UserService {
    @Autowired //используется для внедрения bean-компонента UserRepository в локальную переменную
    private UserRepository userRepository;

    public Object createUser(User reqData) {
		return userRepository.save(reqData);
	}

	public Object getAllUsers() {
		return userRepository.findAll();
	}

	public User isDataExist(User reqData) {
		return userRepository.findByEmailAndPhone(reqData.getEmail(), reqData.getPhone());
	}

	public Object getUserById(Long id) {
		return userRepository.findById(id);
	}

	public Object updateUser(User reqData, User isData) {
		isData.setUsername(reqData.getUsername());
		isData.setEmail(reqData.getEmail());
		isData.setPhone(reqData.getPhone());
		isData.setPassword(reqData.getPassword());
        isData.setImage(reqData.getImage());
        isData.setAge(reqData.getAge());
		return userRepository.save(isData);
	}

	public Object deleteUserById(Long id) {
		userRepository.deleteById(id);
		return null;
	}

}
