import React, {Fragment, useContext} from "react";
import Tweet from "./Tweet";
import { TweetContext } from "../Context/TweetContext";

function TweetList(props) {
const { tweetList } = useContext(TweetContext)
 return (
      <Fragment>
          {tweetList.sort((a, b) => (a.date < b.date)).map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet}  />
          ))}
    </Fragment>
  );
}

export default TweetList;