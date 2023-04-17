import { useState, useEffect, forwardRef } from "react";
import { CloseIcon } from "../Icons/CloseIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { useTranslation } from "react-i18next";

export  const  SerchInput = forwardRef(({ visibleSearchWindow, searchInputData }, ref) => {
  const [valExist, setValExist] = useState(false);
  const [value, setValue] = useState("");
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);
  

  useEffect(() => {
    if (value.length > 0) {
      setValExist(true);
    } else {
      setValExist(false);
    }

   searchInputData(value)
  }, [value]);

  const handleSerchWindow = () => {
    visibleSearchWindow(true);
  };

  return (
    <div className="w-full pr-2 mt-3">
      <div className=" flex flex-row items-center border border-skin-border-base dark:border-skin-border-inverted  rounded-3xl px-2 ">
        <SearchIcon />

        <input
         ref={ref}
          className="h-[40px] w-[90%]  text-xl rounded-xl outline-none bg-skin-fill dark:bg-skin-fill-inverted ml-2"
          type="text"
          maxLength="20"
          placeholder={t("mainPage.search")}
          value={value}
          onClick={handleSerchWindow}
          onChange={(e) => {
            setValExist((prev) => true);
            setValue((prev) => e.target.value);
          }}
        />
        <div className="w-10">
          {valExist && (
            <button
              onClick={() => {
                setValue("");
              }}
              className=" h-[35px] w-[35px] rounded-full hover:bg-skin-button-accent-hover flex items-center justify-center "
            >
              <CloseIcon />
            </button>
        )}
        </div>
      </div>
    </div>
  );
});
