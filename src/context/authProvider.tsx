import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from "firebase/auth";

type AuthContextTypes = {
  user: any;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => void;
  logIn: (email: string, password: string) => Promise<UserCredential>;
};

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({});

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AuthContext.Provider value={{ signUp, logOut, logIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth(): AuthContextTypes {
  const context = useContext<AuthContextTypes | undefined>(AuthContext);
  if (!context) throw new Error("Context missing");
  return context;
}

