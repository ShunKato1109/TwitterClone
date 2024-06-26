import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./TweetBox.css";
import db from "../../firebase"

const TweetBox = () => {

  const [tweetMessage,setTweetMessage] = useState('');
  const [tweetImage,setTweetImage] = useState('');

  const sendTweet = (e)=>{
    e.preventDefault();
    addDoc(collection(db,"posts"),{
      displayName:'プログラミングチュートリアル',
      userName:'Shin_Engineer',
      verified:'true',
      text:tweetMessage,
      avatar:'http://shincode.info/wp-content/uploads/2021/12/icon.png',
      image:tweetImage,
      timestamp:serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };



  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox--input'>
                <Avatar/>
                <input
                  value={tweetMessage}
                  placeholder='いまどうしてる？'
                  type='text'
                  onChange={(e)=>setTweetMessage(e.target.value)}
                ></input>
            </div>
            <input
              value={tweetImage}
              className='tweetBox--imageInput'
              placeholder='画像のURLを入力ください'
              type='text'
              onChange={(e)=>setTweetImage(e.target.value)}
              ></input>
            <Button className='tweetBox--tweetButton' type='submit'
              onClick={sendTweet}
            >ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox
