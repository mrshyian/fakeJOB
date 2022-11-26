import React from 'react';
import {Card} from "react-bootstrap";
import "./SingleOpinionCard.css"
import img from "../../../pictures/airsoftfatty-mcdonalds.gif";

const SingleOpinionCard = () => {
    return (
        <Card border="info" className="opinion-card">
            <Card.Header className="opinion-header-direction">
                <div className="opinion-header-left-div-direction">
                    <img className="user-logo-in-opinion-box" src={img} alt=""/> User1
                </div>
                <div className="opinion-header-right-div-direction">
                    12.11.2022
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Best company</Card.Title>
                <Card.Text>
                    It's the best company where I worked
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default SingleOpinionCard;