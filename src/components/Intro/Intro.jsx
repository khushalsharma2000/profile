import React, { useContext } from "react";
import "./Intro.css";
/*import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";*/
import profile7 from "../../img/profile7.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup1 from "../../img/thumbup1.png";
import crown1 from "../../img/crown1.png";
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
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Khushal Sharma</span>
          <span>
          MERN developer with a flair for digital marketing and equipped
          <br /> with knowledge in blockchain and machine learning.
          </span>
         
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/khushalsharma2000">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/khushal-sharma-a55784248/">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/khushalsharma22/">
          <img src={Instagram} alt="" />
          </a>
          
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/*
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />*/}
      <img src={profile7} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-12%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown1} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "-5rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup1} text1="Digital" text2="Marketer" />
        </motion.div>

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
