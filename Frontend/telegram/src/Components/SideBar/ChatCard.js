export function ChatsCard({ chat }) {
  console.log(chat);

  return (
    <div className=" w-[100%] m-auto  flex flex-row items-center  pb-2 cursor-pointer ">
      <div>
        {chat.chatImage ? (
          <img
            src={""}
            alt="logo"
            className="rounded-full  h-[50px] w-[50px]"
          />
        ) : (
          <div className="rounded-full   h-[50px] w-[50px] bg-purple-500 flex items-center justify-center">
            <p className="text-2xl">{chat.chatName[0]+chat.chatName[1]}</p>
          </div>
        )}
      </div>

    
        <p className="text-xl ml-2">{chat.chatName}</p>
     
    </div>
  );
}
