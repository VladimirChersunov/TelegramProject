import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
          translation: {
            startPage: {
                part1: ' Welcome to the official Cryptic app',
                part2: "It's fast and secure",
                btn:' Start chatting'
              },
              signinPage: {
                placeholder1: 'Username or email',
                placeholder2: "Password",
                recaveryLink:'Forgot your password?',
                btnNext:'Next',
                btnLoading:'Loading...',
                btnSignUp:'Signup',
              },
              signupPage:{
                placeholder1: "Email",
                placeholder2: "Username",
                placeholder3: "Password",
                placeholder4: "Confirm password",              
                btnNext:'Next',
                btnLoading:'Loading...',
                error1: "Password mismatch",
                error2: "Please enter a valid email address.",
                error3: "Username must be between 3 and 20 characters",
                error4: "Password must be between 6 and 20 characters",
                error5: "Email or username already exists",
              },
             entercodePage:{
                part1: "A verification code has been sent to your mailbox",                          
                btnNext:'Next',
                btnWait:'Wait',
                btnResend:'Resend',
                error1: "Code does not match, please try again",
              
              },
              successfulPage:{
                part1: "Registration was successful, now you can log in",                          
                btnLogin:'Log in',             
              },
              recoveryPage:{
                part1: "Enter your email to reset your password",                          
                btnRecovery:'Recovery',
                error1: "Please enter a valid email address.",
                error2: "Something went wrong. Please try again later.",   
                placeholder1: "Email",          
              },
             setnewPasswordPage:{              
                error1: "Unexpected error",
                error2: "Server error",   
                error3: "Password must be between 6 and 20 characters",   
                error4: "Password mismatch",  
                placeholder1: "Password",   
                placeholder2: "Confirm password",
                btnNext:'Next',
                btnLoading:'Loading...',      
                part1:"Enter new password"  
              },
              mainPage:{
                notifications: "Notifications",                          
                mute:"Mute",
                unmute:"Unmute",
                report:"Report",
                leaveChannel:"Leave Channel",
                deleteAndExit:"Delete and exit",
                delete:"Delete",
                inputPanelPlaceholder:"Type your message here...",
                photo:"Photo",
                send:"Send",
                sentSuccessfully:"sent successfully!",
                reply:"Reply",
                select:"Select",
                pinMessage:"Pin message",
                forward:"Forward",
                copyText:"Copy text",
                todayAt:"Today at",
                yesterdayAt:"Yesterday at",
                viewed:"Viewed",
                notViewed:"Not viewed",
                delivered:"Delivered",
                notDelivered:"Not delivered",
                pinnedMessage:"Pinned Message",

              },
          }
        },
        ukr: {
            translation: {
                startPage: {
                part1: 'Вітаємо в офіційному застосунку Cryptic',
                part2: 'Він швидкий та захищений',
                btn:'Почати спiлкування'
              },
              signinPage: {
                placeholder1: "Ім'я користувача або  електронну пошту",
                placeholder2: "Пароль",
                recaveryLink:'Забули свій пароль?',
                btnNext:'Далі',
                btnLoading:'Завантаження...',
                btnSignUp:'Реєстрація',
              },
              signupPage:{
                placeholder1: "Електронна пошта",
                placeholder2: "Ім'я користувача",
                placeholder3: "Пароль",
                placeholder4: "Підтвердьте пароль",    
                btnNext:'Далі',
                btnLoading:'Завантаження...',
                error1: "Невідповідність пароля",
                error2: "Будь ласка, введіть дійсну електронну пошту.",
                error3: "Ім’я користувача має містити від 3 до 20 символів",
                error4: "Пароль має містити від 6 до 20 символів",
                error5: "Електронна адреса або ім’я користувача вже існує",
               
              },
              entercodePage:{
                 part1: "Код підтвердження надіслано на вашу поштову скриньку",                          
                 btnNext:'Далі',
                 btnWait:'Зачекайте',
                 btnResend:'Надіслати повторно',
                 error1: "Код не збігається, спробуйте ще раз",
               
               },
               successfulPage:{
                part1: "Реєстрація пройшла успішно, тепер ви можете увійти",                          
                btnLogin:'Авторизуватися',             
              },
              recoveryPage:{
                part1: "Введіть адресу електронної пошти, щоб змінити пароль",                          
                btnRecovery:'Відновлення',
                error1: "Будь ласка, введіть дійсну адресу електронної пошти.",
                error2: "Щось пішло не так. Будь-ласка спробуйте пізніше.",   
                placeholder1: "Електронна пошта",          
              },
              setnewPasswordPage:{              
                error1: "Неочікувана помилка",
                error2: "Помилка серверу",   
                error3: "Пароль має містити від 6 до 20 символів",   
                error4: "Невідповідність пароля",
                placeholder1: "Пароль",   
                placeholder2: "Підтвердьте пароль",
                btnNext:'Далі',
                btnLoading:'Завантаження...',   
                part1:"Введіть новий пароль"    
              },
              mainPage:{
                notifications: "Сповіщення",                           
                mute:"Вимкнути звук",
                unmute:"Увімкнути звук",
                report:"Звіт",
                leaveChannel:"Залишити канал",
                deleteAndExit:"Видалити та вийти",
                delete:"Видалити",
                inputPanelPlaceholder:"Введіть своє повідомлення тут...",
                photo:"Фото",
                send:"Надіслати", 
                sentSuccessfully:"відправлено успішно!",
                reply:"Відповісти",
                select:"Виберіть",
                pinMessage:"Закріпити повідомлення",
                forward:"Вперед",
                copyText:"Скопіюйте текст",
                todayAt:"Сьогодні о",
                yesterdayAt:"Вчора о",
                viewed:"Переглянуто",
                notViewed:"Не переглядався",
                delivered:"Доставлено",
                notDelivered:"Не доставлений",
                pinnedMessage:"Повідомлення",
              },
            }
          }
      }
  });


export default i18n;