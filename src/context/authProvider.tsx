import { ReactNode, createContext, useContext } from "react";
import {auth} from'../auth/firebase';

const AuthContext = createContext<any>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {  
  return <AuthContext.Provider value={'d'}>{children}</AuthContext.Provider>;
}

export function UserAuth(){
    return useContext(AuthContext)
}