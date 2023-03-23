import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { SerchInput } from "./SerchInput";
import { useEffect, useState } from "react";
import { getSearchResult } from "../../Services/searchServices";

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
          const reasult = await getSearchResult(dataInput);
          setSearchResults((prev)=>reasult);
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
    console.log(searchResults)
  }, [dataInput]);

  const searchInputData = (data) => {
    setDataInput(data);
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
        <SerchInput
          visibleSearchWindow={props.visibleSearchWindow}
          searchInputData={searchInputData}
        />
      </div>
      <div className="flex items-center justify-center mt-10">
       <div className="border-b w-[90%] flex items-center justify-center">
        <p> Users</p>
        </div>
      </div>
    </div>
  );
}
