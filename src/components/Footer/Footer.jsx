import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abirchowdhury09287@gmail.com</span>
        <div className="f-icons">
          <UilFacebookF color="white" size="3rem"></UilFacebookF>
          <UilInstagram color="white" size="3rem"></UilInstagram>
          <UilGithubAlt color="white" size="3rem"></UilGithubAlt>
        </div>
      </div>
    </div>
  );
};

export default Footer;
