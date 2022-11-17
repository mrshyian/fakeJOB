import React from 'react';
import "./header.css"
import { FaUser } from "react-icons/fa";
import {Button} from 'react-bootstrap';
import logo from "../pictures/vecteezy_illustration-vector-graphic-of-job-or-people-search-logo_-removebg-preview.png"

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" className="fake-job-logo"/>
            <nav className="nav-in-header">
                <a href="#">HOME</a>
                <a href="#">OFFERS</a>
                <a href="#">EMPLOYERS</a>
                <div id="indicator"></div>
            </nav>
            <Button href="#" className="login-button" variant="outline-dark"><FaUser/></Button>
        </div>

    );
};

export default Header;