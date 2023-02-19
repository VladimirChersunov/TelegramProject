

export function ContextMenu  (props)  {
    return (
      <div className=" text-black w-[150px] text-md h-20 bg-white rounded-xl" style={{ position: 'absolute', top: props.y, left: props.x }}>
        <ul className="m-0 rounded-xl">
        <li onClick={props.onCopy} className="pl-3 hover:bg-slate-300 rounded-t-xl">Open in new tab</li>
        <div className="h-[1px] bg-black w-[80%] m-auto "></div>
          <li onClick={props.onCopy} className="pl-3 hover:bg-slate-300">Copy</li>
          <li onClick={props.onPaste} className="pl-3 hover:bg-slate-300 ">Paste</li>
        </ul>
      </div>
    );
  }