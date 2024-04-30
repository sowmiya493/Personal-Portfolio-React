import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/girl.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>SOWMIYA</span>
          <span>
            A motivated student looking for on-hand experience and acquiring new knowledge in the IT field as well as enhancing my current skills in different programs and technologies needed for future references.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Click</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/sowmiya493" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub Profile" />
          </a>
          <a href="https://www.linkedin.com/in/sowmiya-s-69651824a" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn Profile" />
          </a>
          <a href="https://www.instagram.com/_._sowmeii_._/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram Profile" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        
        
          

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
