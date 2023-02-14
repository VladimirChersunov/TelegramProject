export function CreateMenu() {
  return (
    <ul
      className={`absolute mt-[-150px] ml-[-150px] block  group-hover:block shadow-2xl bg-white border border-slate-400 rounded-lg  w-[200px] `}
    >
      <li onClick={() => {}} className="hover:bg-gray-200 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#128226;
          <p className="font-bold ml-2">New Channel</p>
        </div>
      </li>
      <li onClick={() => {}} className="hover:bg-gray-200 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#128101;
          <p className="font-bold ml-2">New Group</p>
        </div>
      </li>
      <li onClick={() => {}} className="hover:bg-gray-200 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#128100;
          <p className="font-bold ml-2">New Message</p>
        </div>
      </li>
    </ul>
  );
}
