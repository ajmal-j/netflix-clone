import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import HomePage from "./pages/Home/homePage";
import { MovieProvider } from "./context/movieProvider";
import LogIn from "./pages/authentication/logInPage";
import SignUp from "./pages/authentication/signUpPage";
import { AuthProvider } from "./context/authProvider";
import ProtectedRoute from "./auth/protectedRoute";
import Account from "./pages/account";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AuthProvider>
        <MovieProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/logIn' element={<LogIn />} />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MovieProvider>
      </AuthProvider>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default App;
