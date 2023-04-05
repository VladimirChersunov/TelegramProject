import { useEffect, useState } from "react";
import { getMessaagesById, pinnedMessaages } from "../../Services/messageServices";
import { getUserById } from "../../Services/userServices";
import { CloseIcon } from "../Icons/CloseIcon";

export function PinnedMessage({ pinned, chat, currentChat }) {
  //console.log(pinned);

  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getPinnedMessage = async () => {
      try {
        const pinMessage = await getMessaagesById(pinned);
        const pinUser = await getUserById(pinMessage?.userId);       
        setMessage(pinMessage);
        setUser(pinUser.user);
      } catch (error) {
        console.log(error.pinMessage);
      }
    };

    getPinnedMessage();
  }, [pinned]);

  const handleUnPinnedClick = async () => {
    const action = "Remove"
    try {      
      const data = await pinnedMessaages(action, message.id, chat.id);
      console.log(data);
      currentChat(data.chat)
    } catch (error) {
      console.log(error.data);
    } 
  };

  

  return (
    <div
      
      className=" w-max min-w-[250px] flex flex-row justify-between border-l border-skin-border-base dark:border-skin-border-inverted cursor-pointer"
    >
      <div className="flex flex-row items-center  h-[100%] w-[100%]  ">
        {user?.photo ? (
          <img
            src={user?.photo}
            alt="logo"
            className="rounded-full  h-[40px] w-[40px] border ml-2"
          />
        ) : (
          <div className="rounded-full   h-[40px] w-[40px]  bg-purple-500 flex items-center justify-center select-none ml-2">
            <p className="text-xl">
              {user?.userName &&
                user?.userName[0].toUpperCase() +
                  user?.userName[1].toUpperCase()}
            </p>
          </div>
        )}

        <div className="flex flex-row items-center justify-center ml-2">
          <div className="flex flex-col">
            <p className="mr-2 text-base select-none">Pinned Message</p>
            <p className="text-xs">{message?.text.slice(0, 60)}</p>
          </div>
          <div className="flex items-center justify-center">
            <button onClick={handleUnPinnedClick} className="rounded-full w-[30px] h-[30px] flex items-center justify-center hover:bg-skin-button-accent-hover">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
