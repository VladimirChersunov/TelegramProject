import { addContact, deleteContacts } from "../Services/contactServices";
import { Ahtung } from "./Icons/Ahtung";
import { PeopleIcon } from "./Icons/PeopleIcon";
import { RecicleIcon } from "./Icons/RecicleIcon";

export function ContactsContextMenu({ x, y, userName, type }) {


  const handleCreateContact = () => {
    const create = async () => {
      const data = await addContact(userName);     
    };
    create();
  };

  const handleDeleteContact = () => {
    const create = async () => {        
      const data = await deleteContacts(userName);           
    };
    create();
    
  };
  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">

        {type==="search" &&<div>
        <li
        onClick={handleCreateContact}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <PeopleIcon />
          <p className="font-bold ml-2">Add to contacts</p>
        </li>
        </div>}
       
       
        <li
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <Ahtung />
          <p className="font-bold ml-2 text-skin-error">Add to black list</p>
        </li>
      </ul>
     {type==="contacts" && <div>
      <div className="h-[1px] bg-skin-fill-inverted dark:bg-skin-fill w-[80%] m-auto " />
        <li
        onClick={handleDeleteContact}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none'}/>
          <p className="font-bold ml-2 text-skin-error">Delete</p>
        </li>
      </div>}
    
    </div>
  );
}
