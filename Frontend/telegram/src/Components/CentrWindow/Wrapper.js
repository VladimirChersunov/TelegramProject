export function Wrapper(){
    return(
        <div className="flex w-[350px] min-h-[650px] basis-[350px] flex-col flex-1 overflow-hidden bg-slate-300">
        <div className="flex overflow-x-hidden overflow-y-auto flex-1 relative mr-[6px] mb-[6px] pt-[10px] pb-0 pl-2 pr-2">
          <div className="mt-auto w-[100%]">
            <div>message</div>
            <div>message</div>
            <div>message</div>
            <div>message</div>
          </div>
        </div>
        <div className="relative basis-[50px] border-t border-solid border-black">
          <div className="pt-[15px] pb-[15px] pl-[20px] pr-[50px] max-h-[300px] h-[100%] overflow-y-auto outline-none relative top-0 " contenteditable="true"></div>
        </div>
      </div>
    )
}