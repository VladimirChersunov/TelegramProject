import { ContactsCard } from "../ContactsCard";
import { BackArrowIcon } from "../Icons/BackArrowIcon";

export function ContactWindow(props){
    const handleClickBack = () => {
        props.visibleContact(false);
      };
      return (
        <div className="flex flex-col justify-center">
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
         
          
          <div className="w-full text-center mt-10 flex justify-center">
          <div className="w-[100%] h-[85%]">
          {props.contacts.map((contact, key) => (
            <div className="flex flex-row  border-b border-skin-border-base dark:border-skin-border-inverted  m-1 ">
             
              
              <ContactsCard  key={contact.id} contact={contact} />
            </div>
          ))}
        </div>
          </div>
        </div>
      );
}