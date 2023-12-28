import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import HomePage from "./pages/Home/homePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
