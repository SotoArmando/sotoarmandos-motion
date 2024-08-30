import "./default.css";
import img0 from "../assets/MotionLogo 2.png";
import fb from "../assets/Facebook.png";
import inst from "../assets/Instagram.png";
import link from "../assets/LinkedIn.png";
import x from "../assets/X.png";
import yt from "../assets/Youtube.png";

export default function Footer() {
  return (
    <div className="default-footer inter">
      <div className="default-footer-row">
        <div className="default-footer-text-container">
          <div className="default-footer-text-block" style={{backgroundImage: `url('${img0}')`}}>
          </div>
        </div>
        <div className="default-footer-links-container">
          <div className="default-footer-link">Fuel Card</div>
          <div className="default-footer-link">Factoring</div>
          <div className="default-footer-link">Fleet Management</div>
        </div>
        <div className="default-footer-icons-container">
          <div className="default-footer-icon-wrapper" style={{backgroundImage: `url('${fb}')`}}>
          </div>
          <div className="default-footer-icon-wrapper" style={{backgroundImage: `url('${inst}')`}}>
          </div>
          <div className="default-footer-icon-wrapper" style={{backgroundImage: `url('${x}')`}}>
          </div>
          <div className="default-footer-icon-wrapper" style={{backgroundImage: `url('${link}')`}}>
          </div>
          <div className="default-footer-icon-wrapper" style={{backgroundImage: `url('${yt}')`}}>
          </div>
        </div>
      </div>
      <div className="default-footer-divider">
        <div className="default-footer-divider-line"></div>
        <div className="default-footer-bottom-row">
          <div className="default-footer-copyright">
            © 2024 Motion. All rights reserved.
          </div>
          <div className="default-footer-policy-links">
            <div className="default-footer-policy-link">Privacy Policy</div>
            <div className="default-footer-policy-link">Terms of Service</div>
            <div className="default-footer-policy-link">Cookies Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
