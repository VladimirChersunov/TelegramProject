import { RadioLabel } from "./RadioLabel";


export function RadioElement({chat}) {
 
  return (
    <div className=" w-[97%] m-auto mt-1">
      <input
        type="radio"
        name="option"
        id={chat.id}
        className="peer hidden"
      />
     
    <RadioLabel chat={chat} />
    </div>
  );
}
