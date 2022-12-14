import React from 'react';
import "./offersCarousel.css";
import Carousel from 'react-bootstrap/Carousel';
import {Card} from "react-bootstrap";
import img from "../../../pictures/img.png";
import mac from "../../../pictures/airsoftfatty-mcdonalds.gif";
import mcd from "../../../pictures/logoAskme2.png"
import {IoStarOutline} from "react-icons/io5";
import {GiGraduateCap} from "react-icons/gi";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {HiDocumentText} from "react-icons/hi";

const OffersCarousel = () => {
    return (
        <div >
            <div>
                <h2>Recent viewed:</h2>
            </div>
            <Carousel indicators={false} >
                <Carousel.Item >

                    <div className="carousel-body">
                    <Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mcd} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>




                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mcd} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>




                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mcd} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>




                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mcd} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>




                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mcd} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>




                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card>

                        <Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mcd} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card>

                    </div>
                </Carousel.Item>

                {/*--------------------------------------------*/}

                <Carousel.Item >

                    <div className="carousel-body">
                    <Card className="card-body-offer">

                        <div>
                            <h4 style={{  marginLeft: "90%"}}><IoStarOutline/> </h4>
                            <img className="com-logo-car" src={mac} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>




                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mac} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div>
                            <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                        </div>


                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mac} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div>
                            <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                        </div>


                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mac} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div>
                            <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                        </div>


                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card><Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mac} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div>
                            <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                        </div>


                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card>

                        <Card className="card-body-offer">
                        <div>
                            <img className="com-logo-car" src={mac} alt=""/>
                        </div>
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>
                        </div>

                        <div>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div>
                            <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>
                        </div>


                        <div>
                            <h4><GiGraduateCap/> Junior/Mid</h4>
                        </div>

                        <div>
                            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>
                        </div>

                        <div>
                            <h4> <HiDocumentText/> Contract B2B</h4>
                        </div>


                    </Card>

                    </div>
                </Carousel.Item>





                    {/*<Carousel.Item >*/}
                    {/*    <Card className="nested">*/}
                    {/*        <div>*/}
                    {/*            <img className="com-logo"  src={logo} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="innerDiv">*/}
                    {/*                <div>*/}
                    {/*                    <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>*/}
                    {/*                    <h6>MC Don sp. zo.o. ★★★★☆</h6>*/}
                    {/*                </div>*/}
                    {/*                <div className="custom-select"><GrLocation/>*/}
                    {/*                    <select>*/}
                    {/*                        <option>32 Localizacji </option>*/}
                    {/*                        <option value="1">Poznań, Wielkopolskie</option>*/}
                    {/*                        <option value="2">Warszawa</option>*/}
                    {/*                        <option value="3">Wrocław</option>*/}
                    {/*                    </select>*/}
                    {/*                    <span><AiTwotoneExperiment/> Experience: N/A</span>*/}
                    {/*                </div>*/}
                    {/*                <div className="job-req">*/}
                    {/*                    <p>Java</p>*/}
                    {/*                    <p>CSS</p>*/}
                    {/*                    <p>HTML5</p><p>Java</p>*/}
                    {/*                    <p>CSS</p>*/}
                    {/*                    <p>HTML5</p><p>Java</p>*/}
                    {/*                    <p>CSS</p>*/}
                    {/*                    <p>HTML5</p><p>Java</p>*/}

                    {/*                    <p>kubernetes/jenkins</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="offer-section">*/}
                    {/*            <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>*/}
                    {/*            <h4><GiGraduateCap/> Junior/Mid</h4>*/}
                    {/*            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>*/}
                    {/*            <h4> <HiDocumentText/> Contract B2B</h4>*/}
                    {/*        </div>*/}
                    {/*    </Card>*/}
                    {/*</Carousel.Item>*/}
                    {/*<Carousel.Item>*/}
                    {/*    <Card className="nested">*/}
                    {/*        <div>*/}
                    {/*            <img className="com-logo"  src={img} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="innerDiv">*/}
                    {/*                <div>*/}
                    {/*                    <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Java Fullstack Hero </a></h2>*/}
                    {/*                    <h6>MC Don sp. zo.o. ★★★★☆</h6>*/}
                    {/*                </div>*/}
                    {/*                <div className="custom-select"><GrLocation/>*/}
                    {/*                    <select>*/}
                    {/*                        <option>32 Localizacji </option>*/}
                    {/*                        <option value="1">Poznań, Wielkopolskie</option>*/}
                    {/*                        <option value="2">Warszawa</option>*/}
                    {/*                        <option value="3">Wrocław</option>*/}
                    {/*                    </select>*/}
                    {/*                    <span><AiTwotoneExperiment/> Experience: N/A</span>*/}
                    {/*                </div>*/}
                    {/*                <div className="job-req">*/}
                    {/*                    <p>Java</p>*/}
                    {/*                    <p>CSS</p>*/}
                    {/*                    <p>HTML5</p><p>Java</p>*/}
                    {/*                    <p>CSS</p>*/}
                    {/*                    <p>HTML5</p><p>Java</p>*/}
                    {/*                    <p>CSS</p>*/}
                    {/*                    <p>HTML5</p><p>Java</p>*/}

                    {/*                    <p>kubernetes/jenkins</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="offer-section">*/}
                    {/*            <h3 style={{  marginLeft: "90%"}}><IoStarOutline/> </h3>*/}
                    {/*            <h4><GiGraduateCap/> Junior/Mid</h4>*/}
                    {/*            <h4> <RiMoneyDollarCircleFill/> 2000-3000 PLN net (+ TAX) / month.</h4>*/}
                    {/*            <h4> <HiDocumentText/> Contract B2B</h4>*/}
                    {/*        </div>*/}
                    {/*    </Card>*/}
                    {/*</Carousel.Item>*/}


            </Carousel>
        </div>
    );
};

export default OffersCarousel;