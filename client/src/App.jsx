import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from './services/authService'
import AuthContext from "./contexts/authContexts";
import Path from "./paths";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/GameList/GameList";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/GameDetails/GameDetails";



function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({})

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password)

    setAuth(result);

    navigate(Path.Home)
  }
  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
    </AuthContext.Provider>

  );
}

export default App;
