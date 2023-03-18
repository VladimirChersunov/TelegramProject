import { useNavigate } from "react-router-dom";
import { tokenCheck } from "./authService";
import { useEffect } from "react";

export const useLogout = async() => {

  const userIsInactive = await tokenCheck();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!userIsInactive) {
     
      navigate("/signin");
    }
  }, [userIsInactive]);
}