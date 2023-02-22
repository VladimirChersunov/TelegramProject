import { RadioLabel } from "./RadioLabel";

export function RadioElement(props) {
  return (
    <div className=" w-[97%] m-auto   ">
      <input
        type="radio"
        name="option"
        id={props.chat.id}
        className="peer hidden"
      />
      <RadioLabel chat={props.chat} currentChat={props.currentChat} />
    </div>
  );
}
