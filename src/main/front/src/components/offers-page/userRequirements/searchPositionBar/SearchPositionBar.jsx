import React from 'react';
import {Card} from "react-bootstrap";
import {FaSearchLocation} from "react-icons/fa";
import CloseButton from "react-bootstrap/CloseButton";
import {useState} from 'react';

const SearchPositionBar = (props) => {
    const [selectedPosition, setSelectedPosition] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [enteredWord, setEnteredWord] = useState("");
    const [currentWord, setCurrentWord] = useState("");
    let text = '{"employees":[' +
        '" Backend", ' +
        '" Analyst", ' +
        '" DevOps", ' +
        '" Frontend", ' +
        '" Fullstack", ' +
        '" Project Manager", ' +
        '" QA", ' +
        '" Tester", ' +
        '" Mobile", ' +
        '" Architect", ' +
        '" Support", ' +
        '" Tech Lead", ' +
        '" Embedded", ' +
        '" Scrum Master", ' +
        '" Security", ' +
        '" UI/UX Designer", ' +
        '" GameDev", ' +
        '" Data Science/Engineering" ]}';

    const obj = JSON.parse(text);
    const list = obj.employees;
    const handleFilter = (event) => {
        const searchPosition = event.target.value;
        setCurrentWord(searchPosition);
        setEnteredWord(searchPosition);
        const newFilter = list.filter((value) => {
            return value.toLowerCase().includes(searchPosition.toLowerCase());
        });
        newFilter.sort();
        if(searchPosition === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    };

    const handleChosen = (event) => {
        setSelectedPosition(event.target.value);
        setFilteredData([]);
        setEnteredWord("");
    }

    const clearInput = () =>{
        setFilteredData([]);
        setEnteredWord("");
        setCurrentWord("");
    }

    return (
        <div>
            <Card >
                <div className="search">
                    <div className="search-input">
                        <input type="text"
                               value={enteredWord}
                               placeholder={props.placeholder}
                               onChange={handleFilter}/>
                        <div className="search-icon">
                            {currentWord.length < 1 ? (
                                <FaSearchLocation/>
                            ) : (
                                <CloseButton id="clearBtn" onClick={clearInput} />
                            )}
                        </div>
                    </div>
                    {filteredData.length !==0 && (
                        <div>
                            <p>
                                {filteredData.slice(0,5).reverse().map(items =>
                                    <option className="data-results" onClick={handleChosen} key={items}>{items}</option>
                                )}
                            </p>
                        </div>
                    )}
                    {selectedPosition}
                </div>
            </Card>
        </div>
    );
};

export default SearchPositionBar;