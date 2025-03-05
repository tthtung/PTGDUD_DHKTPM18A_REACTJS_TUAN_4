import React from 'react';
import './Intro.css'; // Import file CSS nếu cần
import reactLogo from "../assets/react.svg";


function Intro() {
    return (
        <div className="intro-container">
            <h1>Emma Gonzalez's Recipe Box</h1>
            <img src={reactLogo} alt="" />
            <p>
                Emma Gonzalez is a deputy editor at Cheilly, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
            </p>
            <div className="stats">
                <p><strong>6.5k Subscribes</strong></p>
                <p><strong>Mode with</strong> <strong>Totally</strong></p>
            </div>
        </div>
    );
}

export default Intro;