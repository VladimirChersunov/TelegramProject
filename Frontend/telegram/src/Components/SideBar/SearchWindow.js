import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { SerchInput } from "./SerchInput";

export function SearchWindow(props) {
  const handleClickBack = () => {
    props.visibleSearchWindow(false);
  };
  return (
    <div className="h-[60px] flex flex-row max-w-full">
      <button
        className="rounded-full hover:bg-skin-button-accent-hover w-[45px] h-[45px] "
        onClick={handleClickBack}
      >
        <BackArrowIcon />
      </button>
      <SerchInput visibleSearchWindow={props.visibleSearchWindow} />
    </div>
  );
}
