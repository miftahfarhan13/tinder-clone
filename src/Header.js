import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useHistory} from 'react-router-dom';

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large"/>
                </IconButton>
            ): (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}

            <Link to="/">
            <img
             className="header__logo"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvaA6U-yyPxGsffnlH7P0Dinc-UjP4sT860iKKgBL&s" 
             alt="tinder logo"/>
            </Link>
            

            <Link to="/chats">
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
            
            
        </div>
    )

}

export default Header