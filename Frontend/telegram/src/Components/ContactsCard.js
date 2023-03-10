export function ContactsCard({ contact }) {
  return (
    <div className="flex flex-row my-1 cursor-pointer ">
      <div className="align-middle content-center items-center place-content-center p-1">
        <div className="rounded-full bg-purple-500 w-[40px] h-[40px] text-center p-1 text-2xl ">
          {contact.image}
        </div>
      </div>
      <div className="flex flex-col ml-2 cursor-pointer">
        <label className="font-bold pl-2 text-md cursor-pointer">{contact.username}</label>
        <label className="text-xs opacity-70 cursor-pointer">{contact.lastSeen}</label>
      </div>
    </div>
  );
}
