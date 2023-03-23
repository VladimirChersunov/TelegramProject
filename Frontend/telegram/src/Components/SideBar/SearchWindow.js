import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { SerchInput } from "./SerchInput";
import { useEffect, useState } from "react";
import { getSearchResult } from "../../Services/searchServices";
import { ContactsCard } from "../ContactsCard";
import { ChatsCard } from "./ChatCard";

export function SearchWindow(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [dataInput, setDataInput] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [error, setError] = useState("");

  const handleClickBack = () => {
    props.visibleSearchWindow(false);
  };

  useEffect(() => {
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
    console.log(searchResults);
    console.log(searchResults.users);
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
          visibleSearchWindow={props.visibleSearchWindow}
          searchInputData={searchInputData}
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 w-full">
        {searchResults?.users?.length === 0 &&
          searchResults?.chats?.length === 0 && (
            <p className="font-bold text-lg text-center">Nothing found yet</p>
          )}

        {searchResults?.users?.length > 0 && (
          <div className=" w-full fleex flex-col items-center justify-center">
            <p className="font-bold text-lg mb-2 text-center">Users</p>
            {searchResults.users.map((user) => (
              <div
                key={user.id}
                className="flex flex-row items-center justify-between  p-2"
              >
                <ContactsCard contact={user} />
              </div>
            ))}
          </div>
        )}

        {searchResults?.chats?.length > 0 && (
          <div className=" w-full flex items-center flex-col">
            <p className="font-bold text-lg mb-2 mt-4">Chats</p>
            {searchResults.chats.map((chat) => (
              <div
                key={chat.id}
                className="flex flex-row items-center justify-between  p-2"
              >
                <ChatsCard chat={chat} />
              </div>
            ))}
          </div>
        )}
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
