import { useState, useEffect } from "react";
import { chatNotifications } from "../../Services/chatServices";

export function MuteSwitch({ chat }) {
  const [mute, setMute] = useState(!chat.muteStatus);
  const toggleClass = " transform translate-x-5";

  useEffect(() => {
    setMute(chat.muteStatus);
  }, [chat.muteStatus]);

  const handleMuteChat = (event) => {
    const muteChat = async () => {
      const responce = await chatNotifications(chat?.id);
      setMute((prev) => !prev);
      console.log(responce.result);
    };

    muteChat();
  };
  return (
    <>
      <div
        className=" w-12 h-5 flex items-center
           bg-white rounded-full  p-1 cursor-pointer"
        onClick={handleMuteChat}
      >
        {/* Switch */}
        <div
          className={
            " h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out bg-slate-600 dark:bg-[#0C0221]" +
            (mute ? toggleClass : null)
          }
        ></div>
      </div>
    </>
  );
}
