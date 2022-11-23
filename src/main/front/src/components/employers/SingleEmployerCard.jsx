import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import "./SingleEmployerCard.css"
import {Link} from "react-router-dom";
import img from "../../pictures/airsoftfatty-mcdonalds.gif"


const SingleEmployerCard = () => {

    const [companyName, setCompanyName] = useState("FAKE Mcdon");
    const [aboutCompany, setAboutCompany] = useState("McDon Corporation is an Polish multinational fast food chain, founded in 2022 as a restaurant operated by Seba and Kuba McDon, in Poznan, Wielkopolska, Poland. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 2022 at a location in Krakow, Poland. In 2022, Wladek Shyian, a businessman, joined the company as a franchise agent and proceeded to purchase the chain from the McDon brothers. McDon's had its previous headquarters in Warsaw, but moved its global headquarters to Poznan in June 2022.");
    const [companyLocation, setCompanyLocation] = useState("Poznan, Wielkopolska, Poland");
    const [companyRating, setCompanyRating] = useState(4);

    function validateAboutCompanyLength() {
        return aboutCompany.length <= 250;
    }

    function validateCompanyRating() {
        var stars = "";
        for (let i=0; i<companyRating; i++){
            stars += "★";
        }
        for (let j=0; j<5-companyRating; j++){
            stars += "☆";
        }
        return stars;
    }

    return (
        <Card className="single-employer-card">
            <div>
                <img className="single-employer-img" src={img} alt=""/>
            </div>
            <div className="single-employer-title">
                <Link className="link-to-company-page" to="/EmployerPage"><h2>{companyName}</h2></Link>
                {validateAboutCompanyLength()===false && <div>{aboutCompany.slice(0, 250)}...</div>}
                {validateAboutCompanyLength()===true && <div>{aboutCompany}</div>}
                <div className="company-location">{companyLocation}<div className="employer-stars">Rating: {validateCompanyRating()}</div></div>
            </div>

        </Card>
    );
};

export default SingleEmployerCard;