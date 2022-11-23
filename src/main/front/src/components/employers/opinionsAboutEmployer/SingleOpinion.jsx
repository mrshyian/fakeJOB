import React from 'react';
import {Card} from "react-bootstrap";
import "./SingleOpinion.css"

const SingleOpinion = () => {
    return (
        <Card border="info" className="opinion-card">
            <Card.Header>User1</Card.Header>
            <Card.Body>
                <Card.Title>Best company</Card.Title>
                <Card.Text>
                    It's the best company where I worked
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default SingleOpinion;