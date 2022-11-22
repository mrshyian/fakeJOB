import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./Registration.css"

const Registration = () => {
    return (
        <div className="bg-log-in-form">
            <div className="log-in-title">REGISTRATION</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="email-more-in-right">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Label className="pass-more-in-right">I'm...</Form.Label>
                <Form.Select size="sm">
                    <option value="1">looking for a job</option>
                    <option value="2">an employer</option>
                </Form.Select>

                <div className="buttons-in-register-form">
                    <Button variant="outline-info" type="submit">
                        Register
                    </Button>
                    <Link to="/Log-in"><Button className="back-button-reg" variant="outline-info" type="submit">Back</Button></Link>
                </div>


            </Form>
        </div>
    );
};

export default Registration;