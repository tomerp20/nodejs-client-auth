import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { TweetContext } from "./Context/TweetContext";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { AuthContext } from './Context/AuthContext';
import useAuth from './Hooks/useAuth';

const App = () => {
  const [tweetList, setTweetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { tweetText, setTweetText } = useState();
  const [activeUser, setActiveUser] = useState(false);
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <div>
        <NavBar/>
        <div className="tweetList">
          <TweetContext.Provider value={{ tweetList, setTweetList, tweetText, setTweetText }}>
            <Routes>
              <Route path="/login" element={<Login setActiveUser={setActiveUser} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<HomePage isLoading={isLoading} setIsLoading={setIsLoading} />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </TweetContext.Provider>
        </div>
      </div>
    </AuthContext.Provider>

  );
};

export default App;
