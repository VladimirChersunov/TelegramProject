
export function InputPanel() {
  const handleInputChange
 = (event) => {
  event.target.style.height = "auto";
  event.target.style.height = (event.target.scrollHeight) + "px";
}


  return (
    <div className=" bg-white w-[100%] h-[60px]">
      <div className="flex flex-row w-[60%] h-[100%] m-auto justify-center ">
      <div className="flex flex-row max-h-fit w-[600px] items-stretch rounded-lg border border-black ">
      <div className="w-[50px]">
          <button className="text-4xl">&#9786;</button>
        </div>

        <div className="w-[500px]">
          <textarea onChange={handleInputChange} className="w-[100%] h-[30px]  mt-3 text-xl rounded-lg outline-none pl-2 resize-none"
           MaxLength="200"  contenteditable="true" placeholder="Message..."/>
        </div>

        <div className="ml-2 mt-1">
          <button className="text-4xl">&#128206;</button>
        </div>
        <div className="ml-3">
          <button className="text-5xl">&#11162;</button>
        </div>
      </div>
      </div>
    </div>
  );
}
