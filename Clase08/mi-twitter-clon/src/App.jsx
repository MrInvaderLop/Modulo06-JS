import {useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import './App.css'
import "./components/styles/Tweet.css"

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
  const validUsername = "Joel";
  const validPassword = "12345";

  if (username === validUsername && password === validPassword) {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  } else {
    alert("Usuario o contraseña incorrectos");
  }
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  //Hay que definir las funciones login y logout en LOGIN.JSX

  return (
    <Router>
  <Routes>
    <Route path="/login" element={<Login onLogin={login} />} />
    <Route
      path="/"
      element={user ? <Home user={user} logout={logout} /> : <Navigate to="/login" />}
    />
    <Route
      path="/profile"
      element={user ? <Profile user={user} /> : <Navigate to="/login" />}
    />
  </Routes>
</Router>
  );
};

export default App
