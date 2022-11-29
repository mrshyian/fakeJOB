import React from 'react';
import {useState} from 'react';
import {Card} from "react-bootstrap";
import {FaSearchLocation} from "react-icons/fa";
import CloseButton from "react-bootstrap/CloseButton";

const SearchTechnologiesBar = (props) => {
    const techStackList = ["HTML", "CSS", "JavaScript", "Databases", "SQL", "NoSQL" ,"MongoDB", "PostgreSQL", "MySQL",  "Laravel", "Ruby", "Vue", "React", "Angular", "Bootstrap",
        "Tailwind", "Node", "Java", "Python", "PHP", "Spring", "Django", "Kafka", "Azure", "AWS", "Google Cloud", "Kubernetes", "Docker", "Android", "iOS", "Swift",
        "Apache", "Nginx", "CloudFlare", "Fastly", "Azure SQL Synapse", "Redshift", "Snowflake", "Splunk", "Talend", "Fivetran",
        "jQuery", "Emberjs", "Backbonejs", "Segment", "Google Apigee", "Mulesoft", "Tealium", "Zapier", "New Relic", "AppDynamics", "Dynatrace", "Datadog",
        "Microsoft Power BI", "SAP BusinessObjects", "Tableau", "Looker", "Qlik", "Heap", "Google Analytics", "Mixpanel", "Countly",
        "Amplitude", "ASP.NET MVC", "IIS", "Microsoft Azure", "SQL Server", "PyTorch", "ONNX", "OpenCV", "Braintree", "Twilio",
         "Amazon CloudFront", "Amazon SES", "Airship", "Falcor", "Adobe Experience Manager", "Okta", "Unbounce", "Oracle Dyn",
        "HackerOne", "UserTesting", "Campaign Monitor", "BitBar", "Zendesk", "SparkPost", "Amazon Route 53",
        "Confluence", "Framer", "Stetho", "App Annie", "Bazel", "Android Studio", "EarlGrey", "Optimizely", "Twilio SendGrid", "Lookback", "Golang"];
    techStackList.sort();
    const [selectedTechnology, setSelectedTechnology] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [enteredWord, setEnteredWord] = useState("");
    const [currentWord, setCurrentWord] = useState("");
    const handleFilter = (event) => {
        const searchTechnology = event.target.value;
        setCurrentWord(searchTechnology);
        setEnteredWord(searchTechnology);
        const newFilter = techStackList.filter((value) => {
            return value.toLowerCase().startsWith(searchTechnology.toLowerCase());
        });
        newFilter.sort();
        if(searchTechnology === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    };

    const handleChosen = (event) => {
        setSelectedTechnology(event.target.value);
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
                                {filteredData.map(items =>
                                    <option className="data-results" onClick={handleChosen} key={items}>{items}</option>
                                )}
                            </p>
                        </div>
                    )}
                    {selectedTechnology}
                </div>
            </Card>
        </div>
    );
};


export default SearchTechnologiesBar;