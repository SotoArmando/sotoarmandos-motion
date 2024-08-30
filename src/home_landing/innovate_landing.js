import img0 from "../assets/Placeholder Image.png";
import "./innovate_landing.css";

export default function InnovateLanding({
  reverse = false,
  placeholder = img0,
  subtitle = "Innovate",
  heading = "Enhance Your Business with Motion's Tailored Solutions",
  paragraph = `Join over 1000 companies in the logistics sector who trust
                Motion to enhance operational efficiencies and grow
                profitability. Our innovative and tailored solutions adapt to
                your unique challenges, powering your business potential.`,
  features = [
    {
      title: "Fuel Efficiency",
      description: `Unlock savings and enhance profitability with our
                  comprehensive perspective on fleet operations and
                  expenditures.`,
    },
    {
      title: "Working Capital",
      description: `Fuel your growth with invoice factoring and unlock your
                  working capital for business expansion.`,
    },
  ],
  background = "#fff",
}) {
  return (
    <div className="innovate-landing-container" style={{ background }}>
      <div className={`innovate-landing-row ${(reverse && "reverse") || ""}`}>
        <div className="innovate-landing-image-container">
          <img src={placeholder} alt="Placeholder" />
        </div>
        <div className="innovate-landing-text-container">
          <div className="innovate-landing-section">
            <div className="innovate-landing-title-container">
              <div className="innovate-landing-subtitle">{subtitle}</div>
              <div className="innovate-landing-heading inter">{heading}</div>
              <div className="innovate-landing-paragraph inter">
                {paragraph}
              </div>
            </div>
            <div className="innovate-landing-feature-container">
              {features.map(({ title, description }) => (
                <div className="innovate-landing-feature">
                  <div className="innovate-landing-feature-title">{title}</div>
                  <div className="innovate-landing-feature-description inter">
                    {description}
                  </div>
                </div>
              ))}
            </div>
            <div className="innovate-landing-button-container">
              <div className="innovate-landing-button class-b-button inter">
                <div className="innovate-landing-button-text">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
