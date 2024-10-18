import React from "react";
import "../styles/AboutScreen.css";

function AboutScreen() {
  return (
    <div className="AboutScreen">
    <div className="about_us">
  
      <div style={{marginBottom:"50px"}} className="mission">
        <span>Our Vision</span>
        <p>
        We will be a part of thriving, inclusive technology ecosystems that invest in people.{" "}
        </p>
      </div>


      <span style= {{fontSize:"25px"}} >What we do ?</span>
      <p>
      We believe technology empowers your business to improve performance and drive results. With a professional team of
       development and design experts, we excel at delivering end-to-end solutions with a human-centric focus. Our process ensures we provide your company a solution with a measurable ROI and business impact.
      </p>

      <span style= {{fontSize:"25px"}} >Commitment</span>
      <p>
      Our organizational commitment to social responsibility is not an afterthought, it is embedded in our services and everything we do.
      </p>
    </div>
  </div>
  );
}

export default AboutScreen;
