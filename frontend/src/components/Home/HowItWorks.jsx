import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quisquam corporis magnam et! Illo velit tenetur rem perspiciatis
            quos culpa non, inventore, pariatur illum fugiat ex minus sit odit
            dignissimos!
          </div>

          <div className="card">
            <MdFindInPage />
            <p>Find a Job / Post a Job</p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quisquam corporis magnam et! Illo velit tenetur rem perspiciatis
            quos culpa non, inventore, pariatur illum fugiat ex minus sit odit
            dignissimos!
          </div>

          <div className="card">
            <IoMdSend />
            <p>Create Account</p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quisquam corporis magnam et! Illo velit tenetur rem perspiciatis
            quos culpa non, inventore, pariatur illum fugiat ex minus sit odit
            dignissimos!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;


