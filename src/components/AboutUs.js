import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>About Us</h1>
        <p>Your Trusted Partner for Quality & Innovation</p>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="content">
          <h2>Our Story</h2>
          <p>
            Established in [Your Year], we started our journey with a vision to provide the best 
            [Your Industry] solutions to our customers. Over the years, we have grown into a trusted 
            name in the industry, known for our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="mission-vision">
        <div className="box">
          <h3>Our Mission</h3>
          <p>
            To empower individuals and businesses with top-notch [Your Service/Product] 
            that drive growth and success.
          </p>
        </div>
        <div className="box">
          <h3>Our Vision</h3>
          <p>
            To be the leading provider of [Your Industry] solutions worldwide, setting new benchmarks 
            for excellence and innovation.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Team Member" />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Team Member" />
            <h4>Jane Smith</h4>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Team Member" />
            <h4>Michael Brown</h4>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
