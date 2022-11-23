import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./SecondStep.css"

const SecondStepOfRegistrationForEmployer = () => {

    return (
        <div className="bg-second-reg-form">
            <div className="log-in-title">SECOND STEP</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="email-more-in-right">Company name</Form.Label>
                    <Form.Control type="text" placeholder="Company name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">Company location</Form.Label>
                    <Form.Control type="text" placeholder="Company location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">About the company</Form.Label>
                    <Form.Control as="textarea" placeholder="About the company" />
                </Form.Group>


                <div className="buttons-in-register-form">
                    <Button variant="outline-info" type="submit">
                        Register
                    </Button>
                    <Link to="/Registration"><Button className="back-button-reg" variant="outline-info" type="submit">Back</Button></Link>
                </div>


            </Form>
        </div>
    );
};

export default SecondStepOfRegistrationForEmployer;