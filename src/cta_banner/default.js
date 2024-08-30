import "./default.css"

export default function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="cta-row inter">
        <div className="cta-text-container">
          <div className="cta-text-block">
            <div className="cta-heading">
              Discover Motion's Powerful Business Solutions
            </div>
            <div className="cta-subheading">
              Unlock your business potential with Motion's innovative solutions
            </div>
          </div>
        </div>
        <div className="cta-buttons-container">
          <div className="cta-button class-a-button">
            <div className="cta-button-text ">Get Started</div>
          </div>
          <div className="cta-button class-b-button">
            <div className="cta-button-text">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}
