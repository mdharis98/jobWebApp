import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const navigate = useNavigate()

  useEffect(() =>{
    if(isAuthorized){
      navigate("/")
    }
  },[isAuthorized, navigate])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setIsAuthorized(true);
      setEmail("");
      setRole("");
      setPassword("");
    } catch (error) {
      toast.error(error.response.data.message || "Error Occured");
    }
  };

  // if (isAuthorized) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <>
      <div className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Login to your account</h3>
          </div>

          <form onSubmit={handleLogin}>
            <div className="inputTag">
              <label htmlFor="role">Login As</label>
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
            <button type="submit">Login</button>
            <Link to={"/register"}>Register</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login logo" />
        </div>
      </div>
    </>
  );
};

export default Login;
