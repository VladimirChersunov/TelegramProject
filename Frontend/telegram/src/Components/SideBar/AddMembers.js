import { ContactsCard } from "../ContactsCard";
import { useState, useEffect} from "react";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { EnterIcon } from "../Icons/EnterIcon";

export function AddMembers(props) {
  const handleClickBack = () => {
    props.visibleAddmembers(false);
  };

  console.log(props.chatType)

  const [checked, setChecked] = useState([]);
  const [privat, setPrivat] = useState([]);
 
  // Add/Remove checked item from list
  const handleCheck = (event, contact) => {
    if (event.target.checked) {
      setChecked([...checked, contact]);
    } else {
      setChecked(checked.filter((c) => c !== contact));
    }
  };

  useEffect(()=>{
if(props.chatType === 'Privat'){

}
else{

}
  }, [])

  const handleNext = () => {
    props.visibleAddNewChat(true);   
    props.handleCheckedContacts(checked)       
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
        <div className="text-2xl mt-3 ml-2">Add Members</div>
      </div>

      <div className="flex justify-center    h-10">
        <input
          placeholder="Who would you like to add?"
          className="text-lg w-[80%] outline-none bg-skin-fill dark:bg-skin-fill-inverted text-skin-base dark:text-skin-inverted
           border-b border-skin-border-base dark:border-skin-border-inverted"
        />
      </div>
      <div className="m-3  h-[100%]">
        <div className="w-[100%] h-[85%]">
          {props.contacts.map((contact) => (
            <div className="flex flex-row  border-b border-skin-border-base dark:border-skin-border-inverted  m-1">
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
          <EnterIcon style="w-9 h-9 stroke-skin-stroke-inverted dark:stroke-skin-stroke-base fill-none" />
        </button>
      </div>
    </div>
  );
}
