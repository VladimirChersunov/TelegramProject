import { ContactsCard } from "./ContactsCard";
import { BackArrowIcon } from "../../Icons/BackArrowIcon";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export function ContactWindow({contacts, visibleContact,currentChat}) {
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);

  const handleClickBack = () => {
    visibleContact(false);
  };

  const typeWindow = "contacts"

 useEffect(() => {
 
 }, [contacts]);

  

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row items-center justify-start">
        <button
          className="ml-2 mt-2 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
             justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>
        <label className="text-2xl pt-2 ml-3">{t("mainPage.contacts")}</label>
      </div>

      <div className="w-full  text-center mt-10 flex justify-center items-center  ">
        <div className="w-full h-[85%]">
          <div className=" w-full flex flex-col items-center justify-center ">           
            {contacts.map((contact, index) => (
              <div key={index}>
               <ContactsCard contact={contact} type={typeWindow} currentChat={currentChat} contacts={contacts}/> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
