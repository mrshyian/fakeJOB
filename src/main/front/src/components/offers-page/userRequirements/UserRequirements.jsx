import React, {useState} from 'react';
import "./userRequirements.css"
import SearchCityBar from "./searchCityBar/SearchCityBar";
import {Card} from "react-bootstrap";
import SearchPositionBar from "./searchPositionBar/SearchPositionBar";
import SearchTechnologiesBar from "./searchTechnologiesBar/SearchTechnologiesBar";

const UserRequirements = () => {
    const [rangeValue, setRangeValue] = useState();
    const handleRangeValue = (e) =>{
        setRangeValue(e.target.value);
    }


    return (
        <div>
            <Card >
                <div className="main-body-req">
                    <div className="search-bar">
                        <SearchPositionBar placeholder="Enter position"/>
                    </div>
                    <div className="search-bar">
                        <SearchCityBar placeholder="Enter city"/>
                    </div>
                    <div className="search-bar">
                        <SearchTechnologiesBar placeholder="Enter technology"/>
                    </div>
                </div>


                <div>
                    <h4>Salary</h4>
                    <input onChange={handleRangeValue} className="custom-slider" type="range" min="0" max="100000" step="1000"/>
                    {rangeValue > 1000 ? "1000 - " + rangeValue : rangeValue}
                </div>
            </Card>

        </div>
    );
};

export default UserRequirements;