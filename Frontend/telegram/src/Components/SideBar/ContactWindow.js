import { ContactsCard } from "./ContactsCard";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { useEffect } from "react";


export function ContactWindow({contacts, visibleContact,currentChat}) {

  const handleClickBack = () => {
    visibleContact(false);
  };

  const typeWindow = "contacts"

 useEffect(() => {
 
 }, [contacts]);

  

  return (
    <div className="flex flex-col w-[350px] w-min-[350px]">
      <div className="flex flex-row items-center justify-start">
        <button
          className="ml-2 mt-2 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
             justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>
        <label className="text-2xl pt-2 ml-3">Contacts</label>
      </div>

      <div className="w-full text-center mt-10 flex justify-center ml-5 ">
        <div className="w-[100%] h-[85%]">
          <div className=" w-full fleex flex-col items-center justify-center">           
            {contacts.map((contact, index) => (
              <div key={index}>
               <ContactsCard contact={contact} type={typeWindow}/> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
