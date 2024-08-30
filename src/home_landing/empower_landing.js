import img0 from "../assets/Relume-1.png"
import img1 from "../assets/Relume-2.png"
import img2 from "../assets/Relume-3.png"
import img3 from "../assets/Relume-4.png"
import "./empower_landing.css"

export default function EmpowerLanding() {
    return (
      <div className="empower-container inter">
        <div className="empower-inner">
          <div className="empower-column">
            <div className="empower-column-inner">
              <div className="empower-title">Empower</div>
              <div className="empower-heading-container">
                <div className="empower-heading">
                  Streamline Your Business with Motion's Tailored Solutions
                </div>
                <div className="empower-text">
                  Motion offers fuel cards, fleet management, and financial
                  solutions that are specifically designed to meet the needs of
                  your business. Our innovative and expert-driven approach helps
                  you enhance operational efficiencies and grow profitability.
                </div>
              </div>
              <div className="empower-button class-b-button">
                <div className="empower-button-text ">Get Started</div>
              </div>
            </div>
          </div>
          <div className="empower-content">
            <div className="empower-content-row">
              <div className="empower-content-inner">
                <div className="empower-subsection">
                  <div className="empower-subsection-icon">
                  <img  src={img0}/>
                  </div>
                </div>
                <div className="empower-subheading">
                  Fuel Cards to Optimize Your Fleet Operations
                </div>
                <div className="empower-subtext">
                  Gain a comprehensive perspective on fleet operations and
                  expenditures to unlock savings and enhance profitability.
                </div>
              </div>
              <div className="empower-content-inner">
                <div className="empower-subsection">
                  <div className="empower-subsection-icon">
                  <img  src={img0}/>
                  </div>
                </div>
                <div className="empower-subheading">
                  Financial Solutions for Your Business Growth
                </div>
                <div className="empower-subtext">
                  Fuel your growth with invoice factoring and unlock your working
                  capital.
                </div>
              </div>
            </div>
            <div className="empower-content-row">
              <div className="empower-content-inner">
                <div className="empower-subsection">
                  <div className="empower-subsection-icon">
                  <img  src={img0}/>
                  </div>
                </div>
                <div className="empower-subheading">
                  Efficient Fleet Management for Better Performance
                </div>
                <div className="empower-subtext">
                  Take control of your fleet with real-time insights for better
                  performance and cost savings.
                </div>
              </div>
              <div className="empower-content-inner">
                <div className="empower-subsection">
                  <div className="empower-subsection-icon">
                    <img  src={img0}/>
                  </div>
                </div>
                <div className="empower-subheading">
                  Trusted by 1000+ Companies in the Logistics Sector
                </div>
                <div className="empower-subtext">
                  Join leaders in the logistics sector who trust Motion to enhance
                  operational efficiencies and grow profitability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
