import React from 'react';
import "./Sidebar.css";

// MaterialUI
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
const sidebarOptions = [
    {text:'ホーム',Icon:HomeIcon,active:'active'},
    {text:'話題を検索',Icon:SearchIcon},
    {text:'通知',Icon:NotificationsNoneIcon},
    {text:'メッセージ',Icon:MailOutlineIcon},
    {text:'ブックマーク',Icon:BookmarkBorderIcon},
    {text:'リスト',Icon:ListAltIcon},
    {text:'プロフィール',Icon:PermIdentityIcon},
    {text:'もっとみる',Icon:MoreHorizIcon},
];
  return (
    <div className="sidebar">
        {/* ツイッターアイコン */}
        <TwitterIcon className='sidebar--twitterIcon'/>
        {/* サイドバーオプション */}
        {sidebarOptions.map((option) =>(
        <SidebarOption key={option.text} text={option.text} Icon={option.Icon} active={option.active}/>
        ))}
        {/* ツイートボタン */}
        <Button variant="outlined" className='sidebar--tweet' fullWidth>
            ツイートする
        </Button>
    </div>
  )
}

export default Sidebar
