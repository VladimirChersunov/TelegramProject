import { BackArrowIcon } from "../Icons/BackArrowIcon";

export function SettingWindow(props) {
  const handleClickBack = () => {
    props.visibleSetting(false);
  };
  return (
    <div className="flex flex-col justify-center">
      <button
        className="ml-4 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
        onClick={handleClickBack}
      >
        <BackArrowIcon />
      </button>
      <div className="flex items-center justify-center mt-[150px]">
       
      </div>
      <div className="w-full text-center mt-10 flex justify-center">
        <p className="w-[75%]">
          Sattings may be here
        </p>
      </div>
    </div>
  );
}
