import { ContactsCard } from "./ContactsCard";

import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { SerchInput } from "./SerchInput";

export function StartPrivate(props) {
  const handleClickBack = () => {
    props.visibleStartPrivate(false);
  };

  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="h-[53px] flex flex-row max-w-full items-center justify-center">
        <button
          className="rounded-full hover:bg-skin-button-accent-hover w-[50px] h-[40px] mx-[6px] mt-3 flex items-center justify-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>
        <SerchInput visibleSearchWindow={props.visibleSearchWindow} />
      </div>

      <div className="m-3  h-[100%]">
        <div className="w-[100%] h-[85%]">
          {props.contacts.map((contact) => (
            <div
              onClick={handleClick}
              className="flex flex-row  border-b border-skin-border-base dark:border-skin-border-inverted  m-1"
            >
              <ContactsCard contact={contact} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
