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
import Logout from "./components/Logout/Logout";



function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({})

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password)

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home)
  }

  

  const registerSubmitHandler = async (values) => {
    console.log(values);
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
}

const logoutHandler = () => {
  setAuth({});
  localStorage.removeItem('accessToken')
}

const values = { 
    loginSubmitHandler, 
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email, 
    email: auth.email, 
    isAuthenticated: !!auth.accessToken
  }
  return (
    <AuthContext.Provider value={values}>
    <div id="box">
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
        <Route path={Path.Logout} element={<Logout/>}/>
      </Routes>
    </div>
    </AuthContext.Provider>

  );
}

export default App;
