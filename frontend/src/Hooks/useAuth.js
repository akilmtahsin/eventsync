import { useContext } from "react";
import AuthContext from "../Authentication/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;