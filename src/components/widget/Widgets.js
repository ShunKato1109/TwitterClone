import { Search } from '@mui/icons-material'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';
import React from 'react'
import "./Widgets.css"

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets--input'>
            <Search className='widgets--searchIcon'/>
            <input placeholder='キーワードを検索' type='text' />
        </div>
        <div className='widget--widgetContainer'>
            <h2>いまどうしてる？</h2>

            {/* ライブラリ */}
            <TwitterTweetEmbed tweetId={"1475764828208009220"}/>
            <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='Shin_Engineer'
                options={{height:400}}
            />
            <TwitterShareButton
                url={'https://twitter.com/Shin_Engineer'}
                options={{text:'#React.js勉強中', via:'Shin_Engineer'}}
            />
        </div>
      
    </div>
  )
}

export default Widgets
