import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LogIn.css"
import {Link} from "react-router-dom";

const LogIn = () => {
    return (
        <div className="bg-log-in-form">
            <div className="log-in-title">LOG IN</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="email-more-in-right">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-info" type="submit">
                    Submit
                </Button>
                <div className="divide-in-log-in-form">______________________________________</div>
                <div>No account? Then <Link to="/Registration">sign up</Link></div>
            </Form>
        </div>

    );
}

export default LogIn;