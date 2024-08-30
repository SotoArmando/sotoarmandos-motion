import logo from "./logo.svg";
import "./App.css";
import "./Fonts.css";
import img1 from "./assets/Placeholder Image 1.png";
import NavigationBar from "./navigation_bar/default";
import HomeLanding from "./home_landing/default";
import InnovateLanding from "./home_landing/innovate_landing";
import EmpowerLanding from "./home_landing/empower_landing";
import CTABanner from "./cta_banner/default";
import Footer from "./footer/default";

function App() {
  return (
    <div style={{paddingTop:"4.5rem"}}>
      <NavigationBar />
      <HomeLanding />
      <InnovateLanding />
      <InnovateLanding
        background="#9ca3b014"
        reverse={true}
        placeholder={img1}
        subtitle="Discover"
        heading="Unlock Savings and Enhance Profitability with Motion"
        paragraph="Join leaders in the logistics sector who trust Motion to enhance operational efficiencies and grow profitability. Our tailored solutions adapt to your unique challenges, powering potential through innovation and expertise."
        features={[
          {
            title: "Fuel Network",
            description:
              "Gain a comprehensive perspective on fleet operations and expenditures to unlock savings and enhance profitability.",
          },
          { title: "Factoring",description:
            "Fuel Your Growth with Invoice Factoring: Unlock Your Working Capital.", },
        ]}
      />
      <EmpowerLanding />
      <InnovateLanding background="#9ca3b014" />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
