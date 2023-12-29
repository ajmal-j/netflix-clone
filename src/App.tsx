import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import HomePage from "./pages/Home/homePage";
import { MovieProvider } from "./context/movieProvider";
import LogIn from "./pages/authentication/logInPage";
import SignUp from "./pages/authentication/signUpPage";
import { AuthProvider } from "./context/authProvider";

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
          </Routes>
        </MovieProvider>
      </AuthProvider>
    </>
  );
}

export default App;
