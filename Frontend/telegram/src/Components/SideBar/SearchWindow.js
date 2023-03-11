import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { SerchInput } from "./SerchInput";

export function SearchWindow(props) {

  const handleClickBack = () => {
    props.visibleSearchWindow(false);
  };
  return (
    <div className="flex flex-col">
       <div className="h-[53px] flex flex-row max-w-full items-center justify-center">
      <button
        className="rounded-full hover:bg-skin-button-accent-hover w-[50px] h-[40px] mx-[6px] mt-3 flex items-center justify-center"
        onClick={handleClickBack}
      >
     
        <BackArrowIcon />
       
       
      </button>
      <SerchInput visibleSearchWindow={props.visibleSearchWindow} />
    </div>
    <div className="flex items-center justify-center mt-10">
    <label>Search result</label>
    </div>

    </div>
   
  );
}
