package itstep.thesis.telegram.controllers;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import itstep.thesis.telegram.beans.BeanValidator;
import itstep.thesis.telegram.beans.ResultDTO;
import itstep.thesis.telegram.models.UserModel.User;
import itstep.thesis.telegram.services.UserService;






// класс UserController  содержит все API для операций CRUD.


@RestController//аннотация используется для определения контроллера и для указания того, что возвращаемое значение методов должно быть привязано к телу веб-ответа.
@CrossOrigin
@RequestMapping("/users")//объявляет, что все URL-адреса API в контроллере будут начинаться с /users
public class UserController {
//Мы автоматически подключили UserService и BeanValidator для внедрения bean-компонента в качестве локальной переменной.

// @RequestBody указывает, что Spring должен десериализовать тело запроса в объект. Этот объект передается как параметр метода обработчика.
//  Если вы хотите получить данные в виде формы, вы должны использовать @ModelAttributeвместо @RequestBody.

//В ответ на каждый API я использую конструктор класса ResultDTO, который содержит ответный пакет.
    @Autowired
    private  UserService userService;

    @Autowired
	private BeanValidator beanValidator;

    // получаем весь список юзеров
    @GetMapping("/allUsers")
	public ResponseEntity<?> allUsers() {
		System.err.println(":::  UserController.allUsers :::");
		ResultDTO<?> responsePacket = null;
		try {
			responsePacket = new ResultDTO<>(userService.getAllUsers(), "Users fetched successfully !!", true);
			return new ResponseEntity<>(responsePacket, HttpStatus.OK);
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}

    // получаем юзера по айди
    @GetMapping("/getUserById/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") Long id) {
		System.err.println(":::  UserController.getUserById :::");
		ResultDTO<?> responsePacket = null;
		try {
			responsePacket = new ResultDTO<>(userService.getUserById(id), "User fetched successfully !!", true);
			return new ResponseEntity<>(responsePacket, HttpStatus.OK);
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}

    // создаем юзера
    @PostMapping("/createUser")
	public ResponseEntity<?> createUser(@RequestBody User reqData) {
		System.err.println(":::  UserController.createUser :::");
		ResultDTO<?> responsePacket = null;
		try {
			ArrayList<String> errorList = beanValidator.userValidate(reqData);
			if (errorList.size() != 0) {
				ResultDTO<ArrayList<String>> errorPacket = new ResultDTO<>(errorList,
						"Above fields values must not be empty", false);
				return new ResponseEntity<>(errorPacket, HttpStatus.BAD_REQUEST);
			}
			User isData = userService.isDataExist(reqData);
			if (isData == null) {
				responsePacket = new ResultDTO<>(userService.createUser(reqData), "User Created Successfully", true);
				return new ResponseEntity<>(responsePacket, HttpStatus.OK);
			} else {
				responsePacket = new ResultDTO<>("Record already exist", false);
				return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}


    // обновляем юзера
    @PutMapping("/updateUser")
	public ResponseEntity<?> updateUser(@RequestBody User reqData) {
		System.err.println(":::  UserController.updateUser :::");
		ResultDTO<?> responsePacket = null;
		try {
			User isData = userService.isDataExist(reqData);
			if (isData != null) {
				responsePacket = new ResultDTO<>(userService.updateUser(reqData, isData), "User Updated Successfully",
						true);
				return new ResponseEntity<>(responsePacket, HttpStatus.OK);
			} else {
				responsePacket = new ResultDTO<>("Record not exist", false);
				return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}


    // удаляем юзера
    @DeleteMapping("/deleteUserById/{id}")
	public ResponseEntity<?> deleteUserById(@PathVariable("id") Long id) {
		System.err.println(":::  UserController.deleteUserById :::");
		ResultDTO<?> responsePacket = null;
		try {
			responsePacket = new ResultDTO<>(userService.deleteUserById(id), "User deleted successfully !!", true);
			return new ResponseEntity<>(responsePacket, HttpStatus.OK);
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}

}

// REST API, которые мы создали :
// users/createUser (POST): создать нового пользователя.
// users/allUsers (GET): получить всех пользователей из базы данных.
// users/getUserById (GET): получить пользователя из базы данных.
// users/updateUser (PUT): обновить запись пользователя.
// users/deleteUserById (DELETE): удалить пользователя.
