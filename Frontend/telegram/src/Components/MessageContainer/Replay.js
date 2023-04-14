import { Reply } from "../Icons/Reply"

export function Replay({message}){
    console.log(message)
return(
    <div className="border-b flex flex-row w-[90%]">
        <Reply/>
        <span>{message.author.userName}</span>
        <span>{message.text}</span>
    </div>
)
}