import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { SerchInput } from "./SerchInput";
import { useEffect, useState, useRef } from "react";
import { getSearchResult } from "../../Services/searchServices";
import { ContactsCard } from "./ContactComponents/ContactsCard";
import { ChatsCard } from "./ChatComponents/ChatCard";
import { useTranslation } from "react-i18next";

export function SearchWindow({
  visibleSearchWindow,
  currentChat,
  contacts,
  visibleSide,
  visibleMain,
  isSmallWidth,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [dataInput, setDataInput] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [error, setError] = useState("");
  const typeWindow = "search";
  const inputRef = useRef(null);
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleClickBack = () => {
    visibleSearchWindow(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // установка фокуса на инпуте
    }

    const getData = async () => {
      if (dataInput.length >= 3) {
        try {
          setIsLoading(true);
          const result = await getSearchResult(dataInput);
          setSearchResults(result);
        } catch (error) {
          console.error(error);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults({});
      }
    };
    getData();
  }, [dataInput]);

  const searchInputData = (data) => {
    setDataInput(data);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="h-[53px] flex flex-row max-w-full items-center justify-center">
        <button
          className="rounded-full hover:bg-skin-button-accent-hover w-[50px] h-[40px] mx-[6px] mt-3 flex items-center justify-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>
        <SerchInput
          ref={inputRef}
          visibleSearchWindow={visibleSearchWindow}
          searchInputData={searchInputData}
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 w-full">
        {searchResults?.users?.length === 0 &&
        searchResults?.chats?.length === 0 ? (
          <div>
            <p className="font-bold text-lg text-center">
              {t("mainPage.nothingFound")}
            </p>
          </div>
        ) : (
          <div>
            {!(searchResults?.users?.length > 0) &&
              !(searchResults?.chats?.length > 0) && (
                <p className="font-bold text-lg text-center">
                  {t("mainPage.enterRequest")}
                </p>
              )}
          </div>
        )}

        {searchResults?.users?.length > 0 && (
          <div className=" w-full flex flex-col items-center ">
            <p className="font-bold text-lg mb-2 text-center">
              {t("mainPage.users")}
            </p>
            {searchResults.users.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-row items-center   p-2"
              >
                <ContactsCard
                  contact={contact}
                  type={typeWindow}
                  currentChat={currentChat}
                  contacts={contacts}
                  visibleSide={visibleSide}
                  visibleMain={visibleMain}
                  isSmallWidth={isSmallWidth}
                />
              </div>
            ))}
          </div>
        )}

        {searchResults?.chats?.length > 0 && (
          <div className=" w-full flex items-center flex-col">
            <p className="font-bold text-lg mb-2 text-center mt-4">
              {t("mainPage.chats")}
            </p>
            {searchResults.chats.map((chat) => (
              <div key={chat.id} className="flex flex-row items-center   p-2">
                <ChatsCard
                  chat={chat}
                  currentChat={currentChat}
                  visibleSide={visibleSide}
                  visibleMain={visibleMain}
                  isSmallWidth={isSmallWidth}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {isLoading && (
        <p className="w-full text-center">{t("mainPage.loading")}</p>
      )}
      {error && <p className="text-center text-skin-error">{error.message}</p>}
    </div>
  );
}
