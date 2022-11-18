import React from 'react';
import gif from "../pictures/work-from-home-wfh.gif";
import mouse from "../pictures/Cursor-Click-Sticker-Cursor-Cl-unscreen.gif";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="proverb">«No bees no honey, no work no money»</div>
            <div className="home-inline-div-gif">
                <div><img src={gif} alt="" className="gif"/></div>
                <div className="find-a-job">Find a job in one click</div>
                <div><img src={mouse} alt="" className="gif2"/></div>
            </div>

        </div>
    );
};

export default Home;