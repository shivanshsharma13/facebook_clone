import React from 'react';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import DehazeIcon from '@material-ui/icons/Dehaze';
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';



function Header() {

    const [{ user }] = useStateValue();
    return <div className = "header">
            
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                
                <div className="header__input">
                    <SearchIcon color="black" fontSize="medium"/>
                </div>

            </div>

            <div className="header__center">

                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <DehazeIcon fontSize="large" />
                </div>

            </div>
            
            <div className="header__right">
                {/* <div className = "header__info">
                    <Avatar src={user.photoURL}/>
                </div> */}
                <IconButton>
                    <AddIcon fontSize="medium" className="header__rightoption"/>
                </IconButton>

                <IconButton>
                    <ForumIcon fontSize="medium" className="header__rightoption"/>
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon fontSize="medium" className="header__rightoption"/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon fontSize="medium" className="header__rightoption"/>
                </IconButton>
            </div>

        </div>
    
}

export default Header
