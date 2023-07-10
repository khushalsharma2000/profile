import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.jpg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", }} />
      <div className="f-content">
        <span>khushalsharma7791@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/khushalsharma22/">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/khushal-sharma-a55784248/">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/khushalsharma2000">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
