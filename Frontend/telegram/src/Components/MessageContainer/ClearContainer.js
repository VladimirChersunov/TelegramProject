import imagesArray from "../../Services/imageService";

export function ClearContainer({patternIndex}) {
  return (
    <div className="w-full relative h-screen  bg-gradient-to-r from-[#c6bdff] to-indigo-400 dark:from-[#0C0221] dark:to-indigo-800">
     <img className="absolute inset-0 h-full w-full object-cover opacity-30" src={imagesArray[patternIndex]} alt=""/>
    </div>
  );
}
