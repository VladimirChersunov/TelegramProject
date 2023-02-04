package itstep.thesis.telegram.controllers;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import itstep.thesis.telegram.beans.BeanValidator;
import itstep.thesis.telegram.beans.ResultDTO;
import itstep.thesis.telegram.models.UserModel.UserSetting;
import itstep.thesis.telegram.services.UserSettingService;








// класс UserSettingController  содержит все API для операций CRUD.


@RestController//аннотация используется для определения контроллера и для указания того, что возвращаемое значение методов должно быть привязано к телу веб-ответа.
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/UserSetting")//объявляет, что все URL-адреса API в контроллере будут начинаться с /UserSetting
public class UserSettingController {
//Мы автоматически подключили UserSettingService и BeanValidator для внедрения bean-компонента в качестве локальной переменной.

// @RequestBody указывает, что Spring должен десериализовать тело запроса в объект. Этот объект передается как параметр метода обработчика.
//  Если вы хотите получить данные в виде формы, вы должны использовать @ModelAttributeвместо @RequestBody.

//В ответ на каждый API я использую конструктор класса ResultDTO, который содержит ответный пакет.
    @Autowired
    private  UserSettingService userSettingService;

    @Autowired
	private BeanValidator beanValidator;

    // получаем весь список settings
    @GetMapping("/allUserSetting")
	public ResponseEntity<?> allUserSetting() {
		System.err.println(":::  UserSettingController.allUserSetting :::");
		ResultDTO<?> responsePacket = null;
		try {
			responsePacket = new ResultDTO<>(userSettingService.getAllUserSetting(), "setting fetched successfully !!", true);
			return new ResponseEntity<>(responsePacket, HttpStatus.OK);
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}

    // получаем settings по айди
	@CrossOrigin()
    @GetMapping("/getUserSettingById/{id}")
	public ResponseEntity<?> getUserSettingById(@PathVariable("id") Long id) {
		System.err.println(":::  UserController.getUserById :::");
		ResultDTO<?> responsePacket = null;
		try {
			responsePacket = new ResultDTO<>(userSettingService.getUserSettingById(id), "UserSetting fetched successfully !!", true);
			return new ResponseEntity<>(responsePacket, HttpStatus.OK);
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}

    // создаем settings
    @PostMapping("/createUserSetting")
	public ResponseEntity<?> createUserSetting(@RequestBody UserSetting reqData) {
		System.err.println(":::  UserSettingController.createUserSetting :::");
		ResultDTO<?> responsePacket = null;
		try {
			ArrayList<String> errorList = beanValidator.settingValidate(reqData);
			if (errorList.size() != 0) {
				ResultDTO<ArrayList<String>> errorPacket = new ResultDTO<>(errorList,
						"Above fields values must not be empty", false);
				return new ResponseEntity<>(errorPacket, HttpStatus.BAD_REQUEST);
			}
			UserSetting isData = userSettingService.isDataExist(reqData);
			if (isData == null) {
				responsePacket = new ResultDTO<>(userSettingService.createUserSetting(reqData), "UserSetting Created Successfully", true);
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


    // обновляем setting
    @PutMapping("/updateUserSetting")
	public ResponseEntity<?> updateUser(@RequestBody UserSetting reqData) {
		System.err.println(":::  UserSettingController.updateUserSetting :::");
		ResultDTO<?> responsePacket = null;
		try {
			UserSetting isData = userSettingService.isDataExist(reqData);
			if (isData != null) {
				responsePacket = new ResultDTO<>(userSettingService.updateUserSetting(reqData, isData), "User Updated Successfully",
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


    // удаляем setting
    @DeleteMapping("/deleteUserSettingById/{id}")
	public ResponseEntity<?> deleteUserById(@PathVariable("id") Long id) {
		System.err.println(":::  UserSettingController.deleteUserProjeectById :::");
		ResultDTO<?> responsePacket = null;
		try {
			responsePacket = new ResultDTO<>(userSettingService.deleteUserSettingById(id), "UserSetting deleted successfully !!", true);
			return new ResponseEntity<>(responsePacket, HttpStatus.OK);
		} catch (Exception e) {
			responsePacket = new ResultDTO<>(e.getMessage(), false);
			return new ResponseEntity<>(responsePacket, HttpStatus.BAD_REQUEST);
		}
	}

}

// REST API, которые мы создали :
// UserSetting/createUserSetting (POST): создать setting.
// UserSetting/allUserSetting (GET): получить все setting из базы данных.
// UserSetting/getUserSettingById (GET): получить setting из базы данных.
// UserSetting/updateUserSetting (PUT): обновить запись setting.
// UserSetting/deleteUserSettingById (DELETE): удалить setting.

