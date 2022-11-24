import React from 'react';
import {Card} from "react-bootstrap";
import img from "../../pictures/img.png";
import "./offers.css";
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


            <Card className="nested">

                <div>
                    <img style={{maxWidth: "200px"}}  src={img} alt=""/>
                </div>

                <div>

                    <div className="innerDiv">
                        <h2>Oferta praca java fullstack bohater</h2>

                        <select>
                            <option>3 Localizacji </option>
                            <option value="1">Poznań</option>
                            <option value="2">Warszawa</option>
                            <option value="3">Wrocław</option>
                        </select>

                        <h4>Wymagania:</h4>
                        javajavajavajava
                    </div>

                </div>

            </Card>

        </div>
    );
};

export default Offers;