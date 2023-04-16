import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function SignUpFinish() {
  const navigate = useNavigate();
  const location = useLocation();
  const language = location.state?.language;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);

  return (
    <div className="bg-skin-fill-inverted w-[100%] h-screen flex justify-center font-montserrat content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

        <p className="text-[18px] text-skin-inverted text-center font-medium leading-[27px] tracking-normal">
        {t("successfulPage.part1")}
        </p>

        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
           w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
           {t("successfulPage.btnLogin")}
        </button>
      </div>
    </div>
  );
}
