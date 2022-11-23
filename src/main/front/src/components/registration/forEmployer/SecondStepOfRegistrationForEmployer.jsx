import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./SecondStep.css"


const SecondStepOfRegistrationForEmployer = () => {

    const [companyName, setCompanyName] = useState("");
    const [companyLocation, setCompanyLocation] = useState("");
    const [aboutCompany, setAboutCompany] = useState("");

    const [companyNameError, setCompanyNameError] = useState("");
    const [companyLocationError, setCompanyLocationError] = useState("");
    const [aboutCompanyError, setAboutCompanyError] = useState("");

    const setNewCompanyName = e => {
        setCompanyName(e.target.value);
        setCompanyNameError("");
    }

    const validateCompanyName = () => {
        if (companyName==="") {
            setCompanyNameError("This field must not be empty")
        }
    }

    const setNewCompanyLocation = e => {
        setCompanyLocation(e.target.value);
        setCompanyLocationError("");
    }

    const validateCompanyLocation = () => {
        if (companyLocation==="") {
            setCompanyLocationError("This field must not be empty")
        }
    }

    const setNewAboutCompany = e => {
        setAboutCompany(e.target.value);
        var characterCount = e.target.value.length;
        var left = 200 - characterCount;
        if (left > 0) {
            setAboutCompanyError(`Minimum 200 symbols. ${left} characters left.`);
        } else {
            setAboutCompanyError("");
        }

    }

    const validateAboutCompany = () => {
        if (aboutCompany==="") {
            setAboutCompanyError("This field must not be empty")
        }
    }

    function validateAllFields() {
        return companyName !== "" && companyLocation !== "" && aboutCompany !== "" && companyNameError === "" && companyLocationError === "" && aboutCompanyError === "";
    }

    return (
        <div className="bg-second-reg-form">
            <div className="log-in-title">SECOND STEP</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="email-more-in-right">Company name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Company name"
                        value={companyName}
                        onChange={setNewCompanyName}
                        onBlur={validateCompanyName}/>
                </Form.Group>
                {companyNameError && <span className='error'>{companyNameError}</span>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">Company location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Company location"
                        value={companyLocation}
                        onChange={setNewCompanyLocation}
                        onBlur={validateCompanyLocation}/>
                </Form.Group>
                {companyLocationError && <span className='error'>{companyLocationError}</span>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="pass-more-in-right">About the company</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="About the company"
                        value={aboutCompany}
                        onChange={setNewAboutCompany}
                        onBlur={validateAboutCompany}/>
                </Form.Group>
                {aboutCompanyError && <span className='error'>{aboutCompanyError}</span>}

                <div className="buttons-in-register-form">
                    {validateAllFields()===false && <Button disabled variant="outline-info">Register</Button>}
                    {validateAllFields()===true && <Button variant="outline-info">Register</Button>}
                    <Link to="/Registration"><Button className="back-button-reg" variant="outline-info" type="submit">Back</Button></Link>
                </div>
            </Form>
        </div>
    );
};

export default SecondStepOfRegistrationForEmployer;