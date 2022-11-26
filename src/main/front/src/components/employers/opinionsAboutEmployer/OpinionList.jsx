import React from 'react';
import SingleOpinion from "./SingleOpinion";
import "./OpinionList.css"
import Form from 'react-bootstrap/Form';
import {DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

const OpinionList = () => {
    return (
        <div>
            <div>
                <div className="opinion-list-title">McDon opinions</div>
                <DropdownButton className="segregate-opinions-by" variant="outline-info" id="dropdown-basic-button" title="Segregate by">
                    <Dropdown.Item >date (previous)</Dropdown.Item>
                    <Dropdown.Item >date (later)</Dropdown.Item>
                    <Dropdown.Item >rating (ascending)</Dropdown.Item>
                    <Dropdown.Item >rating (descending)</Dropdown.Item>
                </DropdownButton>
            </div>

            <SingleOpinion/>
            <SingleOpinion/>
            <SingleOpinion/>
        </div>
    );
};

export default OpinionList;