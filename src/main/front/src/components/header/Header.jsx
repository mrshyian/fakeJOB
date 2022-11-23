import React from 'react';
import "./header.css"
import { FaUser } from "react-icons/fa";
import logo from "../../pictures/vecteezy_illustration-vector-graphic-of-job-or-people-search-logo_-removebg-preview.png"
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" className="fake-job-logo"/>
            <nav className="nav-in-header">

                <Link to="/Offers">
                    Offers
                </Link>
                <Link to="/Home">
                    Home
                </Link>
                <Link to="/EmployersPage">EMPLOYERS</Link>
                <div id="indicator"></div>
            </nav>
            <Button href="#" className="login-button" variant="outline-dark"><Link className="link-in-button" to="/Log-in"><FaUser/></Link></Button>
        </div>

    );
};

export default Header;