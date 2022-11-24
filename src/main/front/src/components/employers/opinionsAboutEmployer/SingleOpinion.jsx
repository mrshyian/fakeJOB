import React from 'react';
import img from "../../../pictures/airsoftfatty-mcdonalds.gif";
import {Button, Card} from "react-bootstrap";
import "./SingleOpinion.css"
import {FaRegThumbsDown, FaRegThumbsUp} from "react-icons/fa";

const SingleOpinion = () => {
    return (
        <Card className="single-opinion-card">
            <div>
                <img className="user-avatar-opinion" src={img} alt=""/>
            </div>
            <div className="opinion">
                <div className="username-opinion">Marcin Żyła</div>
                <div className="opinion-date-and-stars">
                    <div className="opinion-date">22.11.2022</div>
                    <div className="opinion-stars">★★★★☆</div>
                </div>

                <div className="opinion-text">It's the best company where I workedIt's the best company where I workedIt's the best company where I workedIt's the best company where I workedIt's the best company where I workedIt's the best company where I workedIt's the best company where I worked</div>
            </div>
            <div className="opinion-rating-block">
                <div>
                    <Button size="sm" variant="outline-info"><FaRegThumbsDown/></Button>
                    <Button size="sm" variant="outline-info"><FaRegThumbsUp/></Button>
                </div>
                <div className="opinion-vote-div">4.86 / 5</div>
            </div>


        </Card>
    );
};

export default SingleOpinion;