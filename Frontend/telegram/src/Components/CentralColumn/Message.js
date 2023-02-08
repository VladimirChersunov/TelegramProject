import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";


export function Message() {
  
  const text =
    "Luke, youre going to find that many of the truths we cling to  depend greatly on our own point of view. The truth is often what we make of it; you heard what you wanted to hear, believed  what you wanted to believe.";

  return (
    <div>
      <MessageIn
        message={{
          id: 1,
          author: "Obi-Wan Kenobi",
          authorImage: "T",
          sendTime: "00:00",
          data: { text },
          sendStatus: "Delivered",
        }}
      />
      <MessageOut
        message={{
          id: 2,
          author: "Anakin",
          authorImage: "T",
          sendTime: "00:00",
          data: { text },
          sendStatus: "Seen at 12:46",

        }}
      />
    </div>
  );
}
