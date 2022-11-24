import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Offers from "./components/offers-page/Offers";
import Home from "./components/home-page/Home";
import LogIn from "./components/log-in/LogIn";
import Registration from "./components/registration/Registration";
import SecondStepOfRegistrationForEmployer from "./components/registration/forEmployer/SecondStepOfRegistrationForEmployer";
import EmployersPage from "./components/employers/EmployersPage";
import SingleEmployerPage from "./components/employers/SingleEmployerPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/Offers" element={<Offers />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/EmployersPage" element={<EmployersPage />}/>
                <Route path="/Log-in" element={<LogIn />}/>
                <Route path="/Registration" element={<Registration />}/>
                <Route path="/Second-step-of-registration-for-employer" element={<SecondStepOfRegistrationForEmployer />}/>
                <Route path="/EmployerPage" element={<SingleEmployerPage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

