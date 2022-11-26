import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "react-bootstrap";

const CountryApi = (props) => {
    const [data, setData] = useState([]);
    const [selectedCity, setSelectedCity] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const cities = data.filter(city => city.subcountry === "Greater Poland Voivodeship");
    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/" +
            process.env.REACT_APP_ALL_CITIES_AND_COUNTRIES_API_KEY + "/world-cities_json.json")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleFilter = (event) => {
        const searchCity = event.target.value;
        const newFilter = data.filter((value) => {
            return value.includes(searchCity);
        });
        setFilteredData(newFilter);
    }

    const handleCity = (e) => {
        setSelectedCity(e.target.value)
    }
    return (
        <div>
            <Card>
                {/*<div>*/}
                {/*    <select onChange={(e) => handleCity(e)}>*/}
                {/*        <option value="">Select City</option>*/}
                {/*        <option value="Remote">Remote</option>*/}
                {/*        {cities.map(items => <option key={items.name}>{items.name}</option>)}*/}
                {/*    </select>{ selectedCity }*/}
                {/*</div>*/}
                <div>
                    <input type="text" placeholder={"placeholder"} onChange={handleFilter}/>
                </div>
                <div>
                    {filteredData.length !==0 && (
                        <div>
                            <p>
                                {cities.map(items => <option key={items.name}>{items.name}</option>)}
                            </p>
                        </div>

                    )}
                </div>
            </Card>
        </div>
    );
};

export default CountryApi;