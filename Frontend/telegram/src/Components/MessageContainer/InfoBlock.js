import { useEffect, useState } from "react";
import { SavedIcon } from "../Icons/SavedIcon";
import { useTranslation } from "react-i18next";
import { BackArrowIcon } from "../Icons/BackArrowIcon";

export function InfoBlock({
  chat,
  toggleRightColumn,
  visibleSide,
  visibleMain,
  isSmallWidth,
}) {
  const [typeChat, setTypeChat] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();
  //console.log(chat)

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
  //console.log(chat)
  useEffect(() => {
    if (chat?.type === "Channel") {
      setFavorite(false);
      setTypeChat(`${chat?.membersCount} ${t("mainPage.subscrybers")}`);
    } else if (chat?.type === "Group") {
      setTypeChat(`${chat?.membersCount} ${t("mainPage.members")}`);
      setFavorite(false);
    } else if (chat?.type === "Favorite") {
      setFavorite(true);
    } else {
      setTypeChat(chat?.author);
      setFavorite(false);
    }
  }, [chat]);

  const handleClickBack = () => {
    visibleSide(true);
    visibleMain(false);
  };

  return (
    <div className="flex flex-row hover:cursor-pointer items-center justify-between  min-w-[250px] sm:mb-2 sm:w-[400px]">
      {isSmallWidth && (
        <button
          className=" ml-4  rounded-full hover:bg-skin-button-accent-hover h-[35px] w-[40px] flex
         justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>
      )}
      <div
        onClick={() => {
          toggleRightColumn(true);
        }}
        className="flex  h-[100%] w-[100%] items-center ml-5"
      >
        {chat?.chatImage ? (
          <img
            src={chat?.chatImage}
            alt="logo"
            className="h-[40px] w-[40px] select-none  rounded-full"
          />
        ) : (
          <div className="rounded-full   h-[40px] w-[40px]  bg-purple-500 flex items-center justify-center select-none">
            {favorite ? (
              <SavedIcon />
            ) : (
              <p className="text-lg">
                {chat?.chatName &&
                  chat?.chatName[0]?.toUpperCase() +
                    chat?.chatName[1]?.toUpperCase()}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col  w-[85%] mt-1">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-lg mr-2 ml-2">{chat?.chatName} </p>
              {typeChat && <p className="text-xs ml-2"> {typeChat} </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
