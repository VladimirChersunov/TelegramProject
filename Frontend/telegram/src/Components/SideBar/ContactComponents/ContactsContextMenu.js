import { addContact, deleteContacts } from "../../../Services/contactServices";
import { BanIcon } from "../../Icons/BanIcon";
import { PeopleIcon } from "../../Icons/PeopleIcon";
import { RecicleIcon } from "../../Icons/RecicleIcon";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export function ContactsContextMenu({
  x,
  y,
  contact,
  handleCloseContextMenu,
  contactExists,
}) {
  const menuRef = useRef(null);
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  //console.log(contactExists);
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

  useEffect(() => {
    const parentRect = menuRef.current.parentNode.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    let correctedX = x;
    let correctedY = y;

    if (menuRect.right > parentRect.right) {
      correctedX -= menuRect.right - parentRect.right;
    }

    if (menuRect.bottom > parentRect.bottom) {
      correctedY -= menuRect.bottom - parentRect.bottom;
    }

    menuRef.current.style.left = `${correctedX}px`;

    if (correctedY < 0) {
      correctedY = 1;
    }

    if (window.innerHeight - correctedY < 250) {
      correctedY = window.innerHeight - 250;
    }

    menuRef.current.style.top = `${correctedY}px`;
  }, [x, y]);

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
      ref={menuRef}
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
            <p className="font-bold ml-2">{t("mainPage.addToContacts")}</p>
          </li>
        )}

        <li
          id="menu-item"
          className="menu-item hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <BanIcon />
          <p className="font-bold ml-2 text-skin-error">
            {t("mainPage.baned")}
          </p>
        </li>
      </ul>
      {contactExists && (
        <div>
          <div className="menu-item h-[1px] bg-skin-fill-inverted dark:bg-skin-fill w-[80%] m-auto " />
          <li
            id="menu-item"
            onClick={handleDeleteContact}
            className="menu-item hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none"} />
            <p className=" font-bold ml-2 text-skin-error">
              {t("mainPage.delete")}
            </p>
          </li>
        </div>
      )}
    </div>
  );
}
