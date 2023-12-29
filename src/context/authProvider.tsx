import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, app } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext<any>(undefined);

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
    // @ts-ignore
    <AuthContext.Provider value={(signUp, logOut, logIn, user)}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
