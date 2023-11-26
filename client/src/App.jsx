import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/GameList/GameList";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/GameDetails/GameDetails";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({})

  const loginSubmitHadnler = (values) => {
    console.log(values);
  }
  return (
    <AuthContext.provider value={{loginSubmitHadnler}}>
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/login" element={<Login loginSubmitHadnler={loginSubmitHadnler}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
    </AuthContext.provider>

  );
}

export default App;
