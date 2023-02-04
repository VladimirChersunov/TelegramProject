package itstep.thesis.telegram.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import itstep.thesis.telegram.models.UserModel.UserSetting;
import itstep.thesis.telegram.repository.UserSettingRepository;
import lombok.Data;

// UserSettingService.java, который содержит все методы для обработки операций CRUD
//  с репозиторием и возврата ответа в UserSettingController.java.

@Service//аннотация используется для обозначения класса как поставщика услуг, который предоставляет некоторые бизнес-функции.
@Data
public class UserSettingService {
    @Autowired //используется для внедрения bean-компонента UserSettingRepository в локальную переменную
    private UserSettingRepository userSettingsRepository;

    public Object createUserSetting(UserSetting reqData) {
		return userSettingsRepository.save(reqData);
	}

	public Object getAllUserSetting() {
		return userSettingsRepository.findAll();
	}

	public UserSetting isDataExist(UserSetting reqData) {
		return userSettingsRepository.findByName(reqData.getName());
	}

	public Object getUserSettingById(Long id) {
		return userSettingsRepository.findById(id);
	}

	public Object updateUserSetting(UserSetting reqData, UserSetting isData) {
		isData.setName(reqData.getName());
		
		return userSettingsRepository.save(isData);
	}

	public Object deleteUserSettingById(Long id) {
		userSettingsRepository.deleteById(id);
		return null;
	}

}



