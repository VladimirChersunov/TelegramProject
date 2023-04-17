import { BackArrowIcon } from "../Icons/BackArrowIcon";


export function LanguagePicker({visibleLanguagePicker}) {
  
    const handleBack = ()=>{
        visibleLanguagePicker(false)
    }

  return (
    <div className="flex flex-col w-[350px] w-min-[350px] overflow-auto">
      {/* header */}
      <div className="flex flex-row items-center">
        <button
        onClick={handleBack}
          className="ml-2 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
         
        >
          <BackArrowIcon />
        </button>

        <label className="text-2xl mt-4 ml-2 select-none">Change language</label>
      </div>

     
      
    </div>
  );
}
