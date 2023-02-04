export function PinnedMessage() {
  return (
    <div className=" w-1/4 flex flex-row justify-between">
      <div className="flex flex-row  h-[100%] w-[100%]  ">
        <div>
          <div className="rounded-full mt-[5px] ml-1 mr-2 h-[40px] w-[40px] bg-purple-500 flex flex-row justify-center text-white text-2xl pt-1">
            <p>M</p>
          </div>
        </div>

        <div className="flex flex-col  w-[85%] mt-1">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="mr-2 text-base">Pinned message</p>
              <p className="text-xs">
                It is a long established fact that a reader will be{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
