import { useState } from "react";

export const useAuth = () => {
  const [token,setToken]=useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserHr, setIsUserHr] = useState(false);

  const loginfunc = () => {
    console.log("called");
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
        setToken(userData.authtoken)
        setIsLoggedIn(true);
      if (userData.designation === "HR") {
        setIsUserHr(true);
      }
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsUserHr(false);
    localStorage.clear();
    window.location.pathname = "/login";
  };
  return {token,isLoggedIn,isUserHr,loginfunc,logout};
};
