import { createContext, useContext, useReducer, type ReactNode } from "react";

// Crear la estructura del contexto

interface AuthReducerContextType {
  user;
  dispatch;
}

const AuthReducerContext = createContext<AuthReducerContextType>(
  {} as AuthReducerContextType
);

// el hook useContext necesita el nombre del contexto
export const useAuthReducer = () => useContext(AuthReducerContext);

const initialUser = {
  name: "",
  last_name: "",
};

const userReducer = (
  state: { name: string; last_name: string },
  action: any
) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const AuthReducerProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  return (
    <AuthReducerContext.Provider value={{ user, dispatch}}>
      {children}
    </AuthReducerContext.Provider>
  );
};
