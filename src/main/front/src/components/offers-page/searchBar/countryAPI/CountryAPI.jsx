import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "react-bootstrap";
import {FaSearchLocation} from "react-icons/fa";

const CountryApi = (props) => {
    const [data, setData] = useState([]);
    const [searchCity, setSearchCity] = useState("");
    const [selectedCity, setSelectedCity] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [a, setA] = useState([]);
    const cities = data.filter(city => city.subcountry === "Greater Poland Voivodeship");

    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/" +
            "5b3dd46ad10990bca47b04b4739a02ba" + "/world-cities_json.json")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleFilter = (event) => {
        setSearchCity(event.target.value);
        const newFilter = cities.filter((value) => {
            return value.name.toLowerCase().includes(searchCity.toLowerCase());
        });
        if(searchCity === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    }

    const handleChosen = (event) => {
      setSelectedCity(event.target.value);
      setSearchCity(event.target.value);
      // setFilteredData([]);
    }

    return (
        <div>
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
                                {filteredData.slice(0,5).reverse().map(items => <option onClick={handleChosen} key={items.name}>{items.name}</option>)}
                            </p>
                        </div>

                    )}
                    {selectedCity}

                </div>
            </Card>
        </div>
    );
};

export default CountryApi;