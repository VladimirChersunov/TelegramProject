import { addContact, deleteContacts } from "../../../Services/contactServices";
import { BanIcon } from "../../Icons/BanIcon";
import { PeopleIcon } from "../../Icons/PeopleIcon";
import { RecicleIcon } from "../../Icons/RecicleIcon";

export function ContactsContextMenu({
  x,
  y,
  contact,  
  handleCloseContextMenu,
  contactExists,
}) {

  console.log(contactExists)
  const handleCreateContact = (event) => {
    event.stopPropagation();
    if (!contactExists) {
      const create = async () => {
        const data = await addContact(contact?.userName);
        console.log(data);
      };
      create();
      handleCloseContextMenu();
    }
  };

  const handleDeleteContact = (event) => {
    event.stopPropagation();
    const deleteContact = async () => {
      const data = await deleteContacts(contact?.userName);
      console.log(data);
    };
    deleteContact();
    handleCloseContextMenu();
  };
  
  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">
        {!contactExists && (
          <li
            id="menu-item"
            onClick={handleCreateContact}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
          >
            <PeopleIcon />
            <p className="font-bold ml-2">Add to contacts</p>
          </li>
        )}

        <li
          id="menu-item"
          className="menu-item hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <BanIcon />
          <p className="font-bold ml-2 text-skin-error">Add to black list</p>
        </li>
      </ul>
      {contactExists &&
        <div>
          <div className="menu-item h-[1px] bg-skin-fill-inverted dark:bg-skin-fill w-[80%] m-auto " />
          <li
            id="menu-item"
            onClick={handleDeleteContact}
            className="menu-item hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none"} />
            <p className=" font-bold ml-2 text-skin-error">Delete</p>
          </li>
        </div>
      }
    </div>
  );
}
