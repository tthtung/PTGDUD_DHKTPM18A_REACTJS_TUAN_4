import React from 'react';
import './Footer.css';
import logo2 from '../assets/Logo2.png';

function Footer() {
    return (
        <div className="footer-container">
            <div className='content1'>
                <p>About us</p>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>

                <div>
                    <input type="text" placeholder='Enter your email' style={{ backgroundColor: 'white', height: '35px', border: 'none', borderRadius: '5px' }} />
                    <button type="button">Send</button>
                </div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '150px' }}>
                    <img src={logo2} alt="" />
                    <p>2023 Chefify Company</p>
                    <p>Terms of Service <br /> Privacy Policy</p>
                </div>
            </div>

            <div className='content2'>
                <h3>Learn More</h3>
                <a href="http://">Our Cooks</a><br />
                <a href="http://">See Our Features</a><br />
                <a href="http://">FAQ</a>

                <h3>Shop</h3>
                <a href="http://">Gift Subscription</a><br />
                <a href="http://">Send Us Feedback</a>
            </div>

            <div className='content4'>
                <h3>Recipes</h3>
                <a href="http://">What to Cook This Week</a><br />
                <a href="http://">Pasta</a><br />
                <a href="http://">Dinner</a><br />
                <a href="http://">Healthy</a><br />
                <a href="http://">Vegetarian</a><br />
                <a href="http://">Vegan</a><br />
                <a href="http://">Christmas</a>
            </div>
        </div>
    );
}

export default Footer;