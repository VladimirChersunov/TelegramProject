import { ContactsCard } from "./ContactComponents/ContactsCard";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";



export function StartPrivate({visibleStartPrivate,contacts,currentChat,currentUser}) {
  const handleClickBack = () => {
    visibleStartPrivate(false);
  };
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    
  };
  return (
    <div className="flex flex-col justify-center w-[350px]">
      <div className="h-[53px] flex flex-row max-w-full items-center justify-start mt-3">
        <button
          className="rounded-full hover:bg-skin-button-accent-hover w-[40px] h-[40px] mx-[6px]  flex items-center justify-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>
        <span className="text-xl">{t("mainPage.startPrivateChat")}</span>
      </div>

      <div className="flex justify-center my-5    h-10">
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder={t("mainPage.toChatWith")}
          className="text-lg w-[80%] outline-none bg-skin-fill dark:bg-skin-fill-inverted text-skin-base dark:text-skin-inverted
           border-b border-skin-border-base dark:border-skin-border-inverted pl-5 placeholder:text-[14px]"
        />
      </div>

      <div className="m-3  h-[100%]">
        <div className="w-[100%] h-[85%]">
          {contacts
          .filter((contact) => contact.userName.toLowerCase().includes(inputValue.toLowerCase()))
          .map((contact) => (
            <div
            key={contact.id}
              onClick={handleClick}
              className="flex flex-row    m-1"
            >
              <ContactsCard contact={contact} currentChat={currentChat} currentUser={currentUser}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
