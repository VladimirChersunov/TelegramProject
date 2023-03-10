export function MessageIn(props) {
  return (
    <div className="w-[100%] flex justify-start ml-10 dark:text-[#0C0221] ">
      <div className="w-[600px] flex flex-row mt-2">
        <div className="flex flex-col justify-end align-bottom">
          <div className="bg-blue-200 w-[50px] h-[50px] relative">
            <div
            id='roundPart'
              className="absolute  w-[55px] h-[50px] bg-skin-fill  dark:bg-skin-fill-inverted  bottom-0 right-0 
             rounded-br-[200px] "
            >
              <div
                className="rounded-full absolute   h-[40px] w-[40px] bg-purple-500  flex 
               justify-center  text-2xl pt-1   border"
              >
                <p>{props.message.authorImage}</p>
              </div>
            </div>
          </div>
        </div>

        <div
        id='textPart'
        className="bg-blue-200 w-[100%] rounded-r-xl rounded-t-xl ">
          <div className="flex flex-row justify-between w-[90%] ml-2 mt-1 font-semibold text-lg">
            {props.message.author}
            <time className="text-xs opacity-50">{props.message.sendTime}</time>
          </div>
          <div className="flex flex-col ml-2">
            {props.message.data}

            <div className=" opacity-50">{props.message.sendStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
