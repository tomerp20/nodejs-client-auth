import React, { useEffect, useState, useContext, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Spinner, Button } from "react-bootstrap";
import { TweetContext } from "../Context/TweetContext";

const TweetForm = (props) => {
  const [tweetText, setTweetText] = useState("");
  const [userName, setUserName] = useState(null);
  const [profileName, setProfileName] = useState("Steven");
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoading, setIsLoading } = props;

  const { tweetList, handleTweet, setTweetList } = useContext(TweetContext);

  function date() {
    let date = new Date();
    let newDate = date.toISOString();
    return newDate;
  }
  function addTweet(event) {
    setTweetText(event.target.value);
  }
  function name() {
    const profileName = JSON.parse(localStorage.getItem("new-Username"));
    if (profileName) {
      setProfileName(profileName);
    }
  }
  useEffect(() => {
    name();
  }, [profileName]);

  const createTweet = async () => {
    // await addDoc(tweetRef, {
    //   content: tweetText,
    //   userName: profileName,
    //   image: auth.currentUser.photoURL || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    //   date: date(),
    // });
    setTweetText("");
    setUserName(profileName);
  };

  function errorCharLength() {
    if (tweetText.length >= 140) {
      return "The tweet can't contain more than 140 char.";
    }
  }
  const createPost = async () => {};

  return (
    <div className="pageContainer d-flex flex-column align-items-center">
      <div className="formContainer d-flex flex-column">
        <form>
          <label htmlFor="location">
            <textarea
              maxLength={140}
              className="tweetForm"
              id="tweetText"
              value={tweetText}
              placeholder="What you have in mind..."
              onChange={addTweet}
            ></textarea>
          </label>
          <div className="containerControl d-flex flex-row justify-content-between">
            <div className="errorContainer">
              {errorCharLength()}
              {errorMessage}{" "}
            </div>
            <div className="button">
              <Button
                variant="primary"
                className="mx-2"
                onClick={createPost}
                disabled={tweetText.length >= 140}
              >
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Tweet"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetForm;
