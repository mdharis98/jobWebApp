import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Jobs = () => {
  const [Jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/v1/Job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.da);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <>
      <section className="jobs page">
        <div className="container">
          <h1>All Availiable Jobs</h1>
          <div className="banner">
            {Jobs.jobs &&
              Jobs.jobs.map((element) => {
                return (
                  <div className="card" key={element._id}>
                    <p>{element.title}</p>
                    <p>{element.category}</p>
                    <p>{element.country}</p>
                    <Link to={`/job/${element._id}`}>Job Details</Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;


