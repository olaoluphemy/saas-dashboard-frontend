"use client";

import { ActionDispatch, createContext, useEffect, useReducer } from "react";
import { User } from "../_components/user/payload";

type Action =
  | { type: "user/setUser"; payload: User }
  | { type: "user/updateLoadingState"; payload: boolean };

interface State {
  user?: User;
  isLoading: boolean;
}

interface ContextProps {
  dispatch: ActionDispatch<[action: Action]>;
  state: State;
}

const initialValue: ContextProps = {
  dispatch: () => null,
  state: { isLoading: false },
};

const initialState: State = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  },
  isLoading: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "user/setUser":
      return { ...state, user: { ...state.user, ...action.payload } };

    case "user/updateLoadingState":
      return { ...state, isLoading: action.payload };
    default:
      throw new Error("No match found, invalid action type");
  }
}

export const userContext = createContext(initialValue);

function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) {
  const [state, dispatch] = useReducer<State, [action: Action]>(
    reducer,
    initialState
  );

  useEffect(() => {
    dispatch({ type: "user/setUser", payload: user });
    // console.log({ user });
  }, [user]);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
