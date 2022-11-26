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

            {/*<Card className="customCard">*/}


            {/*    <img className="com-logo"  src={img} alt=""/>*/}


            {/*    <div className="main-row">*/}
            {/*        <h2>Oferta</h2>*/}
            {/*        <div >*/}
            {/*            <select className="customSelect">*/}
            {/*                <option>3 Localizacji </option>*/}
            {/*                <option value="1">Poznań</option>*/}
            {/*                <option value="2">Warszawa</option>*/}
            {/*                <option value="3">Wrocław</option>*/}
            {/*            </select>*/}
            {/*        </div>*/}

            {/*        <div  >*/}
            {/*            <h4>Wymagania:</h4>*/}
            {/*            <Card style={{ background: "transparent", borderColor: "transparent", maxWidth: "100%", height: "100%"}}>*/}

            {/*                <div className="ko">*/}
            {/*                    java*/}
            {/*                </div><div className="ko">*/}
            {/*                java*/}
            {/*            </div><div className="ko">*/}
            {/*                java*/}
            {/*            </div>*/}

            {/*            </Card>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*    <div className="row-div">*/}
            {/*        <span>Junior</span>*/}
            {/*        <div>*/}
            {/*            <span>13 000-17 000 PLN</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}




            {/*</Card>*/}


            {/*<Card className="nested">*/}

            {/*    <div>*/}
            {/*        <img style={{maxWidth: "200px"}}  src={img} alt=""/>*/}
            {/*    </div>*/}

            {/*    <div>*/}

            {/*        <div className="innerDiv">*/}
            {/*            <h2>Oferta praca java fullstack bohater</h2>*/}

            {/*            <select>*/}
            {/*                <option>3 Localizacji </option>*/}
            {/*                <option value="1">Poznań</option>*/}
            {/*                <option value="2">Warszawa</option>*/}
            {/*                <option value="3">Wrocław</option>*/}
            {/*            </select>*/}

            {/*            <h4>Wymagania:</h4>*/}
            {/*            javajavajavajava*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</Card>*/}

            <Card className="nested">

                <div>
                    <img className="com-logo"  src={img} alt=""/>
                </div>

                <div>

                    <div className="innerDiv">
                        <div>
                            <h2> <a style={{textDecoration: "none", color: "black"}} href="#oferta"> Oferta praca java fullstack bohater </a> </h2>
                        </div>

                         <div className="customSelect"><GrLocation/>
                            <select>
                                <option>3 Localizacji </option>
                                <option value="1">Poznań</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>

                        </div>

                        <div>
                            <h4>Wymagania:</h4>
                            <p>Java, CSS, HTML5</p>
                        </div>

                    </div>



                </div>
                <div>
                    <h3><GiGraduateCap/> Junior</h3>

                </div>

            </Card>

            {/*--------------------------------------------------------------------------*/}
            <Card className="nested">

                <div>
                    <img className="com-logo"  src={logo} alt=""/>
                </div>

                <div>

                    <div className="innerDiv">
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Oferta praca java fullstack bohater </a></h2>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div className="custom-select"><GrLocation/>
                            <select>
                                <option>3 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>



                            <span><AiTwotoneExperiment/>  Doświadczenie: min 3 lata na podobnym stanowisku</span>



                        </div>

                        {/*<div>*/}
                        {/*    <h4>Wymagania:</h4>*/}

                        {/*</div>*/}
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
                    <h4> <RiMoneyDollarCircleFill/> 26 000-32 000 zł netto (+ VAT) / mies.</h4>
                    <h4> <HiDocumentText/> umowa o pracę, kontrakt B2B</h4>
                </div>


            </Card>            <Card className="nested">

                <div>
                    <img className="com-logo"  src={logo} alt=""/>
                </div>

                <div>

                    <div className="innerDiv">
                        <div>
                            <h2><a style={{textDecoration: "none", color: "black"}} href="#oferta"> Oferta praca java fullstack bohater </a></h2>
                            <h6>MC Don sp. zo.o. ★★★★☆</h6>
                        </div>

                        <div className="custom-select"><GrLocation/>
                            <select>
                                <option> 3 Localizacji </option>
                                <option value="1">Poznań, Wielkopolskie</option>
                                <option value="2">Warszawa</option>
                                <option value="3">Wrocław</option>
                            </select>



                            <span><AiTwotoneExperiment/>  Doświadczenie: min 3 lata na podobnym stanowisku</span>



                        </div>

                        {/*<div>*/}
                        {/*    <h4>Wymagania:</h4>*/}

                        {/*</div>*/}
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
                    <h4> <RiMoneyDollarCircleFill/> 26 000-32 000 zł netto (+ VAT) / mies.</h4>
                    <h4> <HiDocumentText/> umowa o pracę, kontrakt B2B</h4>
                </div>


            </Card>

        </div>
    );
};

export default Offers;