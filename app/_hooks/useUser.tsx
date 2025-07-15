import { useContext } from "react";
import { userContext } from "../_contexts/userContext";

export function useUser() {
  const value = useContext(userContext);

  if (!value) throw new Error("User Provider was used outside of UserContext");

  return value;
}
