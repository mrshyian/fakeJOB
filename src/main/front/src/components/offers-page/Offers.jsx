import React from 'react';
import {Card} from "react-bootstrap";
import img from "../../pictures/img.png";
import logo from "../../pictures/logoAskme2.png";

import "./offers.css";
import {GrLocation} from "react-icons/gr";
import {GiGraduateCap} from "react-icons/gi";
import {AiTwotoneExperiment} from "react-icons/ai";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {IoStar, IoStarOutline} from "react-icons/io5";
import {HiDocumentText} from "react-icons/hi";
const Offers = () => {
    return (
        <div>
            <Card className="nested">
                <div>
                    <img className="com-logo"  src={img} alt=""/>
                </div>
                <div>
                    <div className="innerDiv">
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>
                        <div className="custom-select"><GrLocation/>
                            <select>
                                <option>3 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>
                            <span><AiTwotoneExperiment/> Experience: min. 3 years at similar position</span>
                        </div>
                        <div className="job-req">
                            <p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p>  <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>kubernetes/jenkins</p>
                        </div>
                    </div>
                </div>
                <div className="offer-section">
                    <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                    <h4><GiGraduateCap/> Junior</h4>
                    <h4> <RiMoneyDollarCircleFill/> 26 000-32 000 PLN net (+ TAX) / month.</h4>
                    <h4> <HiDocumentText/> Contract of employment, Contract B2B</h4>
                </div>
            </Card>
            <Card className="nested">
                <div>
                    <img className="com-logo"  src={logo} alt=""/>
                </div>
                <div>
                    <div className="innerDiv">
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>
                        <div className="custom-select"><GrLocation/>
                            <select>
                                <option> 3 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>
                            <span><AiTwotoneExperiment/>  Experience: min. 3 years at similar position</span>
                        </div>
                        <div className="job-req">
                            <p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p>  <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>kubernetes/jenkins</p>
                        </div>
                    </div>
                </div>
                <div className="offer-section">
                    <h3 style={{  marginLeft: "90%"}}><IoStar/> </h3>
                    <h4><GiGraduateCap/> Junior</h4>
                    <h4> <RiMoneyDollarCircleFill/> 26 000-32 000 PLN net (+ TAX) / month.</h4>
                    <h4> <HiDocumentText/> Contract of employment, Contract B2B</h4>
                </div>
            </Card>
        </div>
    );
};

export default Offers;