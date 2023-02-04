package itstep.thesis.telegram.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import itstep.thesis.telegram.models.UserModel.UserSetting;

public interface UserSettingRepository extends JpaRepository<UserSetting, Long> {
   
  UserSetting findByName(String name);

}

// Выше мы расширили JpaRepository в нашем UserRepository,
// чтобы мы могли использовать методы JpaRepository: save(), findOne(),
// findById(), findAll(), count(), delete()и deleteById() т. д.
// без реализации этих методов.
// Мы также можем определить наши пользовательские методы в UserRepository.
// Я определил, findByEmailAndMobNoкакие из них возвращают данные пользователя
// на основе электронной почты и номера мобильного телефона.