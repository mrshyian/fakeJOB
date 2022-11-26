import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "react-bootstrap";
import {FaSearchLocation} from "react-icons/fa";

const CountryApi = (props) => {
    const [data, setData] = useState([]);
    const [selectedCity, setSelectedCity] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const cities = data.filter(city => city.subcountry === "Greater Poland Voivodeship");

    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/" +
            "5b3dd46ad10990bca47b04b4739a02ba" + "/world-cities_json.json")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleFilter = (event) => {
        const searchCity = event.target.value;

        const newFilter = cities.filter((value) => {
            return value.name.toLowerCase().includes(searchCity.toLowerCase());
        });
        setFilteredData(newFilter);
    }

    const handleCity = (e) => {
        setSelectedCity(e.target.value)
    }
    return (
        <div>
            {/*<Card>*/}
            {/*    /!*<div>*!/*/}
            {/*    /!*    <select onChange={(e) => handleCity(e)}>*!/*/}
            {/*    /!*        <option value="">Select City</option>*!/*/}
            {/*    /!*        <option value="Remote">Remote</option>*!/*/}
            {/*    /!*        {cities.map(items => <option key={items.name}>{items.name}</option>)}*!/*/}
            {/*    /!*    </select>{ selectedCity }*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    <div>*/}
            {/*        <input type="text" placeholder={"placeholder"} onChange={handleFilter}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        {filteredData.length !==0 && (*/}
            {/*            <div>*/}
            {/*                <p>*/}
            {/*                    {cities.map(items => <option key={items.name}>{items.name}</option>)}*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            */}
            {/*        )}*/}
            {/*        {data.map((value) => {*/}
            {/*            return(*/}
            {/*                <p>{value}</p>*/}
            {/*            )*/}
            {/*        })}*/}

            {/*    </div>*/}
            {/*</Card>*/}



            <Card>
                <div className="search">
                    <div className="search-input">
                        <input type="text" placeholder={props.placeholder} onChange={handleFilter}/>
                        <div className="search-icon">
                            <FaSearchLocation/>
                        </div>
                    </div>
                    {filteredData.length !==0 && (
                        <div className="data-results">
                            <p>
                                {filteredData.map(items => <option key={items.name}>{items.name}</option>)}
                            </p>
                        </div>

                    )}
                    {/*{cities.map((value,key) => {*/}
                    {/*    return(*/}
                    {/*        <p>{value}</p>*/}
                    {/*    )*/}
                    {/*})}*/}




                    {/*<div className="data-results">*/}
                    {/*    <p>*/}
                    {/*        {cities.map(items => <option key={items.name}>{items.name}</option>)}*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
            </Card>





        </div>
    );
};

export default CountryApi;