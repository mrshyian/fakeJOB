import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Offers from "./components/offers-page/Offers";
import Home from "./components/home-page/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/Offers" element={<Offers />}/>
                <Route path="/Home" element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

