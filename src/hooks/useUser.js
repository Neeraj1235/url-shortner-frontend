import { useContext } from "react";
import { UserContext } from "../context/UerProvider";

const useUser = () => {
  const user = useContext(UserContext);

  return [user.userState, user.updateUser];
};

export default useUser;
