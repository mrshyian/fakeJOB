import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import "./SingleEmployer.css"
import {Link} from "react-router-dom";


const SingleEmployer = () => {

    const [companyName, setCompanyName] = useState("FAKE Mcdon ");
    const [aboutCompany, setAboutCompany] = useState("McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States sadasdasdasda dsadasda sdadasdasdasdas dasdasdasd asdsadas adadasdasdas dsadasdasdasd");
    const [companyLocation, setCompanyLocation] = useState("Chicago, Illinois, U.S.");

    function validateAboutCompanyLength() {
        return aboutCompany.length <= 250;
    }

    return (
        <Card className="single-employer-card">
            <div>
                <img className="single-employer-img" src="https://media.tenor.com/jZaaSw8gLvgAAAAM/airsoftfatty-mcdonalds.gif" alt=""/>
            </div>
            <div className="single-employer-title">
                <Link className="link-to-company-page" to="/Log-in"><h2>{companyName}</h2></Link>
                {validateAboutCompanyLength()===false && <div>{aboutCompany.slice(0, 250)}...</div>}
                {validateAboutCompanyLength()===true && <div>{aboutCompany}</div>}
                <div className="company-location">{companyLocation}<div>***</div></div>
            </div>

        </Card>
    );
};

export default SingleEmployer;