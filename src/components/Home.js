import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const [, , authCheck] = useAuth();
  return (
    <>
      <div
        className="card my-3 mb-5 m-md-5 p-5 shadow  border-dark"
        id="homePage"
      >
        <div className="p-5 col">
          <div className="lead display-1 welcome text-center">
            Welcome To Url Shortner
          </div>
        </div>
        <div className="p-5 display-6 col ">
          <br />
          <br />
          <br />
          <p className="longurl text-center">
            Convert the long url into short one!
          </p>
        </div>
      </div>
      <div className="container-fluid bg-dark p-5">
        <div className="container p-5 d-flex justify-content-center align-items-center">
          <Link
            to={authCheck() ? "/dashboard" : "/signup"}
            className="btn btn-outline-warning col-6 p-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
