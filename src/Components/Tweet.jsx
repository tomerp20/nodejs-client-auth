import React, { useState } from "react";
import "../App.css";

const Tweet = ({ tweet }) => {

 return (
    <div className="tweetList">
      <div className="tweetBox">
        <div className="noteHeader">
          <div className="user">{tweet.userName}</div>
          <div className="dateControl">
            <span className="noteEl">{tweet.date}</span>
          </div>
        </div>
        <div className="tweetControl">
          <span className="noteEl">{tweet.content}</span>
          <img className="avatarControl" src={tweet.image}></img>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
