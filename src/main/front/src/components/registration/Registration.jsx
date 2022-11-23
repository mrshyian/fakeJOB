import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./Registration.css"

const Registration = () => {
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    const [emailError, setEmailError] = useState("");
    const [pass1Error, setPass1Error] = useState("");
    const [pass2Error, setPass2Error] = useState("");

    const [userType, setUserType] = useState("");

    const setNewEmail = e => {
      setEmail(e.target.value);
      setEmailError("");
    }

    const validateEmail = () => {
        if (email==="") {
            setEmailError("E-mail field must not be empty")
        }
    }

    const setNewPass1 = e => {
      setPass1(e.target.value);
      setPass1Error("");
    }

    const validatePass1 = () => {
        if (pass1==="") {
            setPass1Error("Please enter Password")
        } else if (pass1.length < 8) {
            setPass1Error("Minimum 8 characters")
        }
    }

    const setNewPass2 = e => {
      setPass2(e.target.value);
      setPass2Error("");
    }

    const validatePass2 = () => {
        if (pass1Error==="Passwords does not match") {
            setPass1Error("");
        }
        if (pass2==="") {
            setPass2Error("Please enter Password")
        } else if (pass1 !== pass2) {
            setPass2Error("Passwords does not match")
            setPass1Error("Passwords does not match")
        } else if (pass2.length < 8) {
            setPass2Error("Minimum 8 characters")
        }
    }

    const userValidate = e => {
      setUserType(e.target.value);
    }

    function validateAllFields() {
      return email !== "" && pass1 !== "" && pass2 !== "" && emailError === "" && pass1Error === "" && pass2Error === "";
    }

    return (
        <div className="bg-log-in-form">
            <div className="log-in-title">REGISTRATION</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="email-more-in-right">Email address</Form.Label>
                    <Form.Control
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={setNewEmail}
                        onBlur={validateEmail}/>
                    {emailError && <span className='error'>{emailError}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">Password</Form.Label>
                    <Form.Control
                        id="pass1"
                        type="password"
                        placeholder="Password"
                        value={pass1}
                        onChange={setNewPass1}
                        onBlur={validatePass1}/>
                    {pass1Error && <span className='error'>{pass1Error}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">Repeat password</Form.Label>
                    <Form.Control
                        id="pass2"
                        type="password"
                        placeholder="Password"
                        value={pass2}
                        onChange={setNewPass2}
                        onBlur={validatePass2}/>
                    {pass2Error && <span className='error'>{pass2Error}</span>}
                </Form.Group>

                <Form.Label className="pass-more-in-right">I'm...</Form.Label>
                <Form.Select size="sm" onChange={(e) => userValidate(e)}>
                    <option value="">---</option>
                    <option value="1">looking for a job</option>
                    <option value="2">an employer</option>
                </Form.Select>

                <div className="buttons-in-register-form">
                    {validateAllFields()===false && <Button disabled variant="outline-info">Register</Button>}
                    {userType==="2" && validateAllFields()===true && <Link to="/Second-step-of-registration-for-employer"><Button variant="outline-info">Register</Button></Link>}
                    {userType==="1" && validateAllFields()===true && <Button variant="outline-info">Register</Button>}
                    <Link to="/Log-in"><Button className="back-button-reg" variant="outline-info" type="submit">Back</Button></Link>
                </div>
            </Form>
        </div>
    );
};

export default Registration;
