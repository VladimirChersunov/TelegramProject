package itstep.thesis.telegram.beans;

import java.util.ArrayList;
import java.util.Set;


import org.springframework.stereotype.Component;

import itstep.thesis.telegram.models.UserModel.User;
import itstep.thesis.telegram.models.UserModel.UserSetting;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;



@Component//аннотация позволяет Spring автоматически обнаруживать наши пользовательские bean-компоненты.
// Другими словами, без необходимости писать какой-либо явный код.
public class BeanValidator {
    
    public Validator getValidator() {
		return Validation.buildDefaultValidatorFactory().getValidator();
	}

	public ArrayList<String> userValidate(User user) {
		ArrayList<String> arrayList = new ArrayList<>();
		Set<ConstraintViolation<User>> constraintViolations = getValidator().validate(user);
		for (ConstraintViolation<User> ConstraintViolation : constraintViolations) {
			if (ConstraintViolation.getPropertyPath().toString().equals("name")) {
				arrayList.add(ConstraintViolation.getMessage());
			}
            if (ConstraintViolation.getPropertyPath().toString().equals("age")) {
				arrayList.add(ConstraintViolation.getMessage());
			}
            if (ConstraintViolation.getPropertyPath().toString().equals("image")) {
				arrayList.add(ConstraintViolation.getMessage());
			}
			if (ConstraintViolation.getPropertyPath().toString().equals("email")) {
				arrayList.add(ConstraintViolation.getMessage());
			}
			if (ConstraintViolation.getPropertyPath().toString().equals("phone")) {
				arrayList.add(ConstraintViolation.getMessage());
			}
			if (ConstraintViolation.getPropertyPath().toString().equals("password")) {
				arrayList.add(ConstraintViolation.getMessage());
			}
			
		}
		return arrayList;
	}

	public ArrayList<String> settingValidate(UserSetting UserSetting) {
		ArrayList<String> arrayList = new ArrayList<>();
		Set<ConstraintViolation<UserSetting>> ConstraintViolations = getValidator().validate(UserSetting);
		for (ConstraintViolation<UserSetting> ConstraintViolation : ConstraintViolations) {
			if (ConstraintViolation.getPropertyPath().toString().equals("name")) {
				arrayList.add(ConstraintViolation.getMessage());
			}           
			if (ConstraintViolation.getPropertyPath().toString().equals("user_id")) {
				arrayList.add(ConstraintViolation.getMessage());
			}		
		}
		return arrayList;
	}

	

}
