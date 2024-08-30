import "./default.css"
import motionlogo from "../../src/assets/MotionLogo 1.png"

export default function NavigationBar() {
  return <div className="navbar-container">
    <div className="navbar-inner">
      <div className="navbar-left">
        <div className="navbar-links inter">
          <div className="navbar-link">Fuel Card</div>
          <div className="navbar-link">Factoring</div>
          <div className="navbar-link">Fleet Management</div>
        </div>
      </div>
      <div className="navbar-middle">
        <img src={motionlogo} /> 
      </div>
      <div className="navbar-right">
        <div className="navbar-button class-a-button inter">
          <div className="navbar-button-text ">Get Started</div>
        </div>
        <div className="navbar-button class-b-button">
          <div className="navbar-button-text">Login</div>
        </div>
      </div>
    </div>
  </div>;
}
