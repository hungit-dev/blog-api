import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isAuthor, setIsAuthor] = useState(false);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isAuthor, setIsLoggedIn, setIsAuthor }}
    >
      <Header />
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
