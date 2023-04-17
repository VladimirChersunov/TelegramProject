import { ContactsCard } from "../ContactComponents/ContactsCard";
import { useState,useEffect } from "react";
import { BackArrowIcon } from "../../Icons/BackArrowIcon";
import { EnterIcon } from "../../Icons/EnterIcon";
import { useTranslation } from "react-i18next";

export function AddMembers({
  visibleAddmembers,
  visibleAddNewChat,
  handleCheckedContacts,
  contacts,
 
}) {
  const [inputValue, setInputValue] = useState("");
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);

  const handleClickBack = () => {
    visibleAddmembers(false);
  };

  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event, contact) => {
    if (event.target.checked) {
      setChecked([...checked, contact]);
    } else {
      setChecked(checked.filter((c) => c !== contact));
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNext = () => {
    visibleAddNewChat(true);
    handleCheckedContacts(checked);
  };
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row items-center m-2 ">
        <button
          className="ml-4 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>
        <div className="text-2xl mt-3 ml-2">{t("mainPage.addMembers")}</div>
      </div>

      <div className="flex justify-center    h-10">
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder={t("mainPage.wouldYouLike")}
          className="text-lg w-[80%] outline-none bg-skin-fill dark:bg-skin-fill-inverted text-skin-base dark:text-skin-inverted
           border-b border-skin-border-base dark:border-skin-border-inverted pl-5"
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
              <input
                value={contact}
                type="checkbox"
                onChange={(e) => handleCheck(e, contact)}
                className="mx-3 scale-150"
              />
              <ContactsCard contact={contact} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[15%] ">
        <button
          onClick={handleNext}
          className="h-[50px] w-[50px]  flex items-center justify-center rounded-full  ml-[80%] bg-skin-fill-inverted
         dark:bg-skin-fill hover:bg-skin-button-inverted-hover dark:hover:bg-skin-button-inverted-hover"
        >
          <EnterIcon styles="w-9 h-9 stroke-skin-stroke-inverted dark:stroke-skin-stroke-base fill-none" />
        </button>
      </div>
    </div>
  );
}
