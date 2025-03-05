import React from 'react';
import './Header.css';
import logo from '../assets/Logo.png';
import reactLogo from '../assets/react.svg';

function Header() {
    return (
        <div className="header-container">
            <div className="logo-search">
                <img src={logo} alt="Cheffiy Logo" />
                <input type="text" placeholder="Search" style={{ backgroundColor: '#f3f4f6', border: 'none', borderRadius: '20px', height: '50px', padding: '0 15px' }} />
            </div>

            <div className="nav-links">
                <a href="#">What to cook</a>
                <a href="#">Recipes</a>
                <a href="#">Ingredients</a>
                <a href="#">Occasions</a>
                <a href="#">About Us</a>
            </div>

            <div className="user-actions">
                <button style={{ backgroundColor: '#fef0f5', color: '#f9a0bf', border: 'none', borderRadius: '20px', padding: '10px 20px', display: 'flex', alignItems: 'center' }}>
                    <img src={reactLogo} alt="Recipe Box Icon" style={{ marginRight: '10px' }} />
                    <span>Your Recipe Box</span>
                </button>
                <img src={reactLogo} alt="User Icon" style={{ marginLeft: '10px', borderRadius: '50%' }} />
            </div>
        </div>
    );
}

export default Header;