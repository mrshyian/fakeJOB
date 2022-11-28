import React from 'react';
import {Card} from "react-bootstrap";
import img from "../../pictures/img.png";
import logo from "../../pictures/logoAskme2.png";
import mcd from "../../pictures/New-McDonald-HU-lg_(43261171540).jpg";
import mac from "../../pictures/airsoftfatty-mcdonalds.gif";
import "./offers.css";
import {GrLocation} from "react-icons/gr";
import {GiGraduateCap} from "react-icons/gi";
import {AiTwotoneExperiment} from "react-icons/ai";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {IoStar, IoStarOutline} from "react-icons/io5";
import {HiDocumentText} from "react-icons/hi";
import OffersCarousel from "./offersCarousel/OffersCarousel";
import SearchCityBar from "./userRequirements/searchCityBar/SearchCityBar";
import UserRequirements from "./userRequirements/UserRequirements";

const Offers = () => {
    return (
        <div>
            <div className="api-card">
                <UserRequirements/>
            </div>

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
                                <option>7 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>
                            <span><AiTwotoneExperiment/> Experience: min. 3 years at similar position</span>
                        </div>
                        <div className="job-req">
                            <p>C++</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>C#</p>
                            <p>Grec philosophy</p>
                            <p>Knowledge of botanic</p>
                            <p>kubernetes/jenkins</p>
                        </div>
                    </div>
                </div>
                <div className="offer-section">
                    <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                    <h4><GiGraduateCap/>Mid / Junior / Trainee</h4>
                    <h4> <RiMoneyDollarCircleFill/> 20 000 / month.</h4>
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
                                <option> 12 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>
                            <span><AiTwotoneExperiment/>  Experience: min. 7 years in Java 8+</span>
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
            <Card className="nested">
                <div>
                    <img className="com-logo"  src={mac} alt=""/>
                </div>
                <div>
                    <div className="innerDiv">
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>
                        <div className="custom-select"><GrLocation/>
                            <select>
                                <option>32 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>
                            <span><AiTwotoneExperiment/> Experience: N/A</span>
                        </div>
                        <div className="job-req">
                            <p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>
                            <p>CSS</p>
                            <p>HTML5</p><p>Java</p>

                            <p>kubernetes/jenkins</p>
                        </div>
                    </div>
                </div>
                <div className="offer-section">
                    <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                    <h4><GiGraduateCap/> Junior/Mid</h4>
                    <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                    <h4> <HiDocumentText/> Contract B2B</h4>
                </div>
            </Card>
            <Card className="nested">
                <div>
                    <img className="com-logo"  src={mcd} alt=""/>
                </div>
                <div>
                    <div className="innerDiv">
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero JOŁ </a></h2>
                            <h6>MC Don sp. zo.o. ★★★★★</h6>
                        </div>
                        <div className="custom-select"><GrLocation/>
                            <select>
                                <option> 3 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>
                            <span><AiTwotoneExperiment/>  Experience: min. 1 year at similar position</span>
                        </div>
                        <div className="job-req">

                            <p>kubernetes/jenkins</p><p>Java</p>
                            <p>CSS</p>

                        </div>
                    </div>
                </div>
                <div className="offer-section">
                    <h3 style={{  marginLeft: "90%"}}><IoStar/> </h3>
                    <h4><GiGraduateCap/> Junior</h4>
                    <h4> <RiMoneyDollarCircleFill/> 9 000-12 000 net/month.</h4>
                    <h4> <HiDocumentText/> Contract of employment</h4>
                </div>
            </Card>
            <OffersCarousel/>
        </div>
    );
};

export default Offers;