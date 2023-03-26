export function ChatsCard({ chat }) {
  return (
    <div className=" w-[300px] h-[60px] m-auto  flex flex-row items-center  cursor-pointer hover:bg-skin-button-accent-hover pl-2 rounded-[4px] border-b border-skin-border-base dark:border-skin-border-inverted">
      {chat.chatImage ? (
        <img src={""} alt="logo" className="rounded-full  h-[50px] w-[50px]" />
      ) : (
        <div className="rounded-full   h-[40px] w-[40px] bg-purple-500 flex items-center justify-center">
          <p className="text-xl">{chat.chatName[0].toUpperCase() + chat.chatName[1].toUpperCase()}</p>
        </div>
      )}

      <p className="text-xl ml-2">{chat.chatName}</p>
    </div>
  );
}
