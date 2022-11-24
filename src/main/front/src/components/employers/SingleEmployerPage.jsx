import React from 'react';
import {Card, CardGroup} from "react-bootstrap";
import logo from "../../pictures/airsoftfatty-mcdonalds.gif"
import photo from "../../pictures/New-McDonald-HU-lg_(43261171540).jpg"
import SingleOpinionCard from "./opinionsAboutEmployer/SingleOpinionCard";
import {Link} from "react-router-dom";
import "./SingleEmployerPage.css"

const SingleEmployerPage = () => {
    return (
        <CardGroup className="employer-page-card-group">

            {/*---------------------------LEFT CARD---------------------------*/}
            <Card className="left-employer-page-card" style={{flex: "2"}}>
                <div className="special-div-1">
                    <Card.Img className="employer-logo-1" variant="top" src={logo} />
                    <Card.Body className="card-title">
                        <Card.Title className="card-title-in">FAKE Mcdon</Card.Title>
                    </Card.Body>
                </div>
                <Card.Text className="left-card-text">
                    McDon Corporation is an Polish multinational fast food chain, founded in 2022 as a restaurant operated by Seba and Kuba McDon, in Poznan, Wielkopolska, Poland. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 2022 at a location in Krakow, Poland. In 2022, Wladek Shyian, a businessman, joined the company as a franchise agent and proceeded to purchase the chain from the McDon brothers. McDon's had its previous headquarters in Warsaw, but moved its global headquarters to Poznan in June 2022.
                </Card.Text>
                <Card.Img className="left-card-image" variant="top" src={photo} />
            </Card>


            {/*---------------------------RIGHT CARD---------------------------*/}
            <Card className="right-employer-page-card" style={{flex: "1", marginLeft: "2%"}}>
                <Card.Body className="card-title">
                    <Card.Title className="card-title-in">Rating</Card.Title>
                    <Card.Text className="right-card-stars">★★★★☆</Card.Text>
                </Card.Body>

                <div className="separating-line">_______________________</div>

                <Card.Body className="card-title">
                    <Card.Title className="card-title-in">Location</Card.Title>
                    <Card.Text className="right-card-location">Chicago, Illinois, U.S.</Card.Text>
                </Card.Body>

                <div className="separating-line">_______________________</div>

                <Card.Body className="employer-opinions-cards">
                    <Card.Title className="card-title-in">Opinions</Card.Title>
                    <SingleOpinionCard/>
                    <SingleOpinionCard/>
                    <SingleOpinionCard/>
                    <Link className="more-opinions" to={"/Opinions"}>More opinions</Link>
                </Card.Body>
            </Card>
        </CardGroup>
        );
    }

export default SingleEmployerPage;