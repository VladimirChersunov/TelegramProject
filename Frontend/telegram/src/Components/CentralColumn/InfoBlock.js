export function InfoBlock() {
  return (
    <div className="flex flex-row justify-between w-1/2 ">
      <div className="flex flex-row  h-[100%] w-[100%]  ">
        <div>
          <div className="rounded-full mt-[5px] ml-1 mr-2 h-[40px] w-[40px] bg-purple-500 flex flex-row justify-center text-white text-2xl pt-1">
            <p>T</p>
          </div>
        </div>

        <div className="flex flex-col  w-[85%] mt-1">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-lg mr-2">Name</p>
              <p className="text-xs">3 members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
