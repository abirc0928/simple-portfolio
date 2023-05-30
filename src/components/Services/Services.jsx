import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          quis dignissimos amet modi non suscipit delectus,
          <br />
          officiis minima eos velit?
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "35rem" }}
          whileInView={{ left: "23rem" }}
          transition={transition}
          style={{ left: "24rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          ></Card>
        </motion.div>
        <motion.div 
         initial={{ left: "-11rem", top: "12rem" }}
         whileInView={{ left: "4rem" }}
         transition={transition}
        style={{ top: "12rem", left: "4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"Html, Css, JavaScript, React, PHP, Spring Boot"}
          ></Card>
        </motion.div>
        <motion.div
        initial={{ top: "19rem", left: "35rem" }}
        whileInView={{ left: "21rem" }}
        transition={transition}
        style={{ top: "19rem", left: "22rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={"Lorem ipsum dolor amet consectetur, adipisicing"}
          ></Card>
        </motion.div>
        <div
          className="s-blur2"
          style={{ background: "rgb(238 210 255)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
