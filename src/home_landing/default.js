import React from 'react';
import './default.css';
import imgCheck from '../assets/check 1.png'
export default function HomeLanding() {
  return (
    <div className="home-landing">
      <div className="section">
        <div className="section-inner">
          <div className="text-center-label inter">
            Fuel Cards, Fleet Management, Financial Solutions Tailored to Your Business
          </div>
          <div className='container-a'>
            <div className="headline inter">Keep Moving with Motion</div>
            <div className="subtext">
              Join leaders in the logistics sector who trust Motion to enhance operational efficiencies and grow profitability.<br/>Our tailored solutions adapt to your unique challenges, powering potential through innovation and expertise.
            </div>
            <div className="button-row">
              <div className="button class-b-button inter">
                <div className="button-text ">Get Started</div>
              </div>    
              <div className="button class-a-button inter">
                <div className="button-text">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-item">
            <div className="footer-icon-container">
              <div className="footer-icon">

                <img src={imgCheck} />
              </div>
            </div>
            <div className="footer-text">Trusted by 1000+ companies</div>
          </div>
          <div className="footer-item">
            <div className="footer-icon-container">
              <div className="footer-icon"><img src={imgCheck} /></div>
            </div>
            <div className="footer-text">Top Discounts Across North America</div>
          </div>
          <div className="footer-item">
            <div className="footer-icon-container">
              <div className="footer-icon"><img src={imgCheck} /></div>
            </div>
            <div className="footer-text">Fastest delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}
