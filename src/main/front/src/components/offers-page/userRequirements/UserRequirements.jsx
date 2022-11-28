import React, {useState} from 'react';
import SearchCityBar from "./searchCityBar/SearchCityBar";
import {Card} from "react-bootstrap";

const UserRequirements = () => {
    const [rangeValue, setRangeValue] = useState();
    const handleRangeValue = (e) =>{
        setRangeValue(e.target.value);
    }
    return (
        <div>
            <Card>
                <SearchCityBar placeholder="Enter city"/>
                <div>
                    <h4>Salary</h4>
                    <input onChange={handleRangeValue} className="custom-slider" type="range" min="1000" max="100000" step="1000"/>
                    {rangeValue > 0 ? "1000 - " + rangeValue : rangeValue}
                </div>
            </Card>

        </div>
    );
};

export default UserRequirements;