import React from "react";
import Card from "./Card";
import Section from "./Section";
import Wave from "./Wave";
import Header from "./HeaderSection";
import Footer from "./Footer";
import studioReact from "../images/logo-react.png";
import codeTwo from "../images/codeagain.jpeg";
import amexLogo from "../images/amex.png";
import appleLogo from "../images/applecomputers.jpg";
import dhLogo from "../images/dh.jpg";
import vertexLogo from "../images/vertex.jpeg";
import ccLogo from "../images/cardconnect.jpeg";
import comcastLogo from "../images/comcast.jpeg";
import hexagonLogo from "../images/hexagonusfederal.jpeg";
import travelersLogo from "../images/travelers.png";
import paramountLogo from "../images/paramountlogo.jpeg";

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="Hero">
          <div className="HeroGroup">
            <h1>
              Welcome <br />
              to my website
            </h1>
            <p>Please scroll down to see the companies I have worked for</p>
            <Wave />
          </div>
        </div>
        <section id="companies">
          <div className="Cards">
            <h2>Companies</h2>
            <div className="CardGroup">
              <Card image={paramountLogo} />
              <Card image={travelersLogo} />
              <Card image={amexLogo} />
              <Card image={appleLogo} />
              <Card image={dhLogo} />
              <Card image={vertexLogo} />
              <Card image={ccLogo} />
              <Card image={comcastLogo} />
              <Card image={hexagonLogo} />
            </div>
          </div>
        </section>
        <section id="about">
          <Section
            image={codeTwo}
            logo={studioReact}
            title="About"
            text="I'm a Full Stack Software Developer that specializes in HTML5, CSS3, SASS, JavaScript, JSX, React JS, Redux, Node JS, Express JS, AWS, MySQL, PostgreSQL, and Mongo DB."
          />
        </section>
        <section id="creative-work">
          <Footer />
        </section>
      </div>
    );
  }
}

export default IndexPage;
