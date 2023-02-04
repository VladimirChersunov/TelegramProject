export function ChatButton() {
  return (
    <div className="flex flex-row bg-slate-200 h-[60px] w-[97%] rounded-xl ml-2 mr-2 mt-1">
      <div>
        <div className="rounded-full mt-[5px] ml-1 mr-2 h-[50px] w-[50px] bg-purple-500 flex flex-row justify-center text-white text-3xl pt-1">
          <p>T</p>
        </div>
      </div>

      <div className="flex flex-col  w-[85%] mt-1">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-lg mr-2">Name</p>
            <div className="mt-1">&#128264;</div>
          </div>
          <div className="">
            <time className="mr-1 text-xs opacity-50">00:00</time>
          </div>
        </div>
        <div>
          <p className="">It is a long established fact that</p>
        </div>
      </div>
    </div>
  );
}
