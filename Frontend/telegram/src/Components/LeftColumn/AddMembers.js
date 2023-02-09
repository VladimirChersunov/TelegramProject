import { ContactsCard } from "../ContactsCard";
import { useState } from "react";

export function AddMembers({ contacts }) {

  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r border-skin-border-base border-solid min-w-[200px]`}
    >
      <div className="flex flex-row items-end  m-2 ">
        <button
          onClick={() => {}}
          className="ml-2 mr-4 text-3xl  hover:bg-slate-200 hover:border hover:border-black
         rounded-full w-[40px] h-[40px]"
        >
          &#129092;
        </button>
        <div className="text-2xl mb-1">Add Members</div>
      </div>
      <div className="flex justify-center border-b-black border-t-white border h-10">
        <input
          placeholder="Who would you like to add?"
          className="text-lg w-[80%] outline-none"
        />
      </div>
      <div className="m-3  h-[100%]">
        <div className="w-[100%] h-[85%]">
          {contacts.map((contact) => (
            <div className="flex flex-row rounded-xl border border-black m-1">
              <input value={contact} type="checkbox" onChange={handleCheck} className="mx-3 scale-150" />
              <ContactsCard contact={contact} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[15%] ">
        <button onClick={()=>{

        }} 
        className="h-[50px] w-[50px] rounded-full bg-blue-300
         hover:bg-blue-600 hover:border hover:border-black text-2xl ml-[85%]">&#129154;</button>
      
      </div>
    </div>
  );
}
