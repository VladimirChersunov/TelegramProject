import "moment/locale/ru";

export function MessageForToast({ message, user }) {
  

  return (
    <div className="w-[270px] h-[100px] bg-skin-fill dark:bg-skin-fill-inverted flex items-center text-skin-base dark:text-skin-inverted  rounded-lg">
       
        {user?.user.photo ? (
        <img
          src={user?.user.photo}
          alt="logo"
          className="rounded-full  h-[80px] w-[80px] border absolute ml-2 border-skin-border-base dark:border-skin-border-inverted"
        />
      ) : (
        <div className="rounded-full   h-[80px] w-[80px] absolute bg-purple-500 flex items-center justify-center select-none ml-2 border border-skin-border-base">
          <p className="text-xl">
            {user?.user.userName &&
              user?.user.userName[0].toUpperCase() +
                user?.user.userName[1].toUpperCase()}
          </p>
        </div>
      )}
      <div className="ml-[100px]">
      <p className="text-left">{user?.user.userName}</p>
      <span className=" mr-2">{message?.message?.substring(0, 25)}</span>
      </div>
        
     
    </div>
  );
}
