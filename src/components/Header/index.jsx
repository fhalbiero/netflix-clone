import React from 'react';

import Logo from '../../assets/netflix_logo.svg'; 
import UserImage from '../../assets/user.png'; 
import { Container } from './styles';


const Header = ({ black }) => (
        <Container black={black}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src={UserImage} alt="Fabio"/>
                </a>
            </div>
        </Container>
);

export default Header;