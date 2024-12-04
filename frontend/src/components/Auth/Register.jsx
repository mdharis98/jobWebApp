import React, { useContext, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        { name, email, password, phone, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
      setPassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message || "Error Occured");
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Create a new account</h3>
          </div>

          <form onSubmit={handleregister}>
            <div className="inputTag">
              <label htmlFor="role">Register As</label>
              <div>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>

            <div className="inputTag">
              <label htmlFor="name">Name</label>
              <div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
                <FaPencilAlt />
              </div>
            </div>

            <div className="inputTag">
              <label htmlFor="email">Email Address</label>
              <div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
                <MdOutlineMailOutline />
              </div>
            </div>

            <div className="inputTag">
              <label htmlFor="phone">Phone Number</label>
              <div>
                <input
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="1234567890"
                  autoComplete="tel"
                />
                <FaPhoneFlip />
              </div>
            </div>

            <div className="inputTag">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  autoComplete="new-password"
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit">Register</button>
            <Link to={"/login"}>Login</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/register.png" alt="register logo" />
        </div>
      </div>
    </>
  );
};

export default Register;
