export function RightMenu(props) {
  return (
    <ul
      className={`absolute mt-4  ml-[-180px] block  group-hover:block shadow-2xl bg-white border border-slate-400 rounded-lg text-lg  w-[200px] `}
    >
      <li onClick={() => {}} className="hover:bg-gray-200 hover:cursor-pointer">
        <div className=" p-1 flex flex-row">
          &#128264;
          <p className="font-bold ml-2">Unmute</p>
        </div>
      </li>
      <li onClick={() => {}} className="hover:bg-gray-200 hover:cursor-pointer">
        <div className=" p-1 flex flex-row">
          &#9989;
          <p className="font-bold ml-2">Select message</p>
        </div>
      </li>
      <li onClick={() => {}} className="hover:bg-gray-200 hover:cursor-pointer">
        <div className=" p-1 flex flex-row">
          &#9872;
          <p className="font-bold ml-2">Report</p>
        </div>
      </li>

      <div className="w-[100%] flex justify-center">
        <div className="w-[80%] h-[1px] bg-slate-500 mt-2 "></div>
      </div>

      <li
        onClick={() => {}}
        className="hover:bg-gray-200 hover:cursor-pointer text-red-600"
      >
        <div className=" p-1 flex flex-row">
          &#128465;
          <p className="font-bold ml-2">Leave Channel</p>
        </div>
      </li>
    </ul>
  );
}
