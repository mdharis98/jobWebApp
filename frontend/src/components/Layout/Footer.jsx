import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin, FaSuitcase } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All rights reserved By HARIS</div>
      <div>
        <Link to={"/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"/"} target="_blank">
          <FaSuitcase />
        </Link>
        <Link to={"/"} target="_blank">
          <RiInstagramFill />
        </Link>
        {/* <Link to={"/"} target='_blank'><FaLinkedin /></Link> */}
      </div>
    </footer>
  );
};

export default Footer;


