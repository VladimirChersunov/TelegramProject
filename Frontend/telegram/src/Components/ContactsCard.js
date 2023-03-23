export function ContactsCard({ contact }) {
  console.log(contact);

  const handleCreateContact = () =>{

  }

  return (
    <div
    onClick={handleCreateContact}
    className="flex flex-row my-1 cursor-pointer items-center">
      <div className="align-middle content-center items-center place-content-center p-1">
        {contact.photo ? (
          <img
            src={""}
            alt="logo"
            className="rounded-full  h-[50px] w-[50px]"
          />
        ) : (
          <div className="rounded-full   h-[50px] w-[50px] bg-purple-500 flex items-center justify-center">
            <p className="text-2xl">
              {contact.userName[0] + contact.userName[1]}
            </p>
          </div>
        )}
      </div>

      <p className="font-bold pl-2 text-xl cursor-pointer">
        {contact.userName}
      </p>
    </div>
  );
}
