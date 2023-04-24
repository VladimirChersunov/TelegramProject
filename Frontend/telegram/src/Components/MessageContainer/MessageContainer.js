import { MainChat } from "./MainChat";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { CloseIcon } from "../Icons/CloseIcon";
import { MessageHeader } from "./MessageHeader";
import { useTranslation } from "react-i18next";
import images from "../../Services/imageService";

export function MessageContainer({
  chat,
  toggleRightColumn,
  changeThemes,
  darkMode,
  currentUser,
  currentChat,
  clearMain,
  chats,
  patternIndex,
  visibleSide,
  visibleMain,
  isSmallWidth,
}) {
  //console.log(chat)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();

  //console.log(chat)
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const visibleModalReport = (props) => {
    setModalIsOpen(props);
  };

  return (
    <div className={`flex relative flex-col h-screen  overflow-hidden w-full`}>
      <img
        className="absolute z-10 inset-0 h-full w-full object-cover opacity-30"
        src={images[patternIndex]}
        alt=""
      />
      <MessageHeader
        visibleModalReport={visibleModalReport}
        clearMain={clearMain}
        chat={chat}
        toggleRightColumn={toggleRightColumn}
        currentChat={currentChat}
        visibleSide={visibleSide}
        visibleMain={visibleMain}
        isSmallWidth={isSmallWidth}
      />
      <MainChat
        chat={chat}
        changeThemes={changeThemes}
        darkMode={darkMode}
        currentUser={currentUser}
        currentChat={currentChat}
        chats={chats}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "1000",
          },
          content: {
            top: "50%",           
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#0c0221", 
           
          },
        }}
        appElement={document.getElementById("root")}
        className="w-[250px] h-[150px] absolute  border border-skin-border-inverted bg-skin-fill-base rounded-lg z-50"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0, 0, 0, 0.5)]  flex items-center justify-center "
        shouldCloseOnOverlayClick={false}
      >
        <div className="flex flex-col w-full h-full z-50">
          <div className="flex w-full justify-end">
            <button
              onClick={handleModalClose}
              className="h-[30px] w-[30px] rounded-full mr-2 mt-2 hover:bg-skin-button-accent-hover flex items-center justify-center"
            >
              <CloseIcon
                styles={
                  "h-5 w-5 stroke-skin-stroke-inverted   fill-none dark:stroke-skin-stroke-base z-50"
                }
              />
            </button>
          </div>

          <span className="text-xl text-center my-2 text-skin-inverted dark:text-skin-base tracking-wider">
            {t("mainPage.report")}
          </span>
          <span className="text-xl text-center my-2 text-skin-inverted dark:text-skin-base">
            {t("mainPage.sentSuccessfully")}
          </span>
        </div>
      </Modal>
    </div>
  );
}
