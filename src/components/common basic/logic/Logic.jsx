import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./logic.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Logic = () => {
  const email = useRef("");
  const password = useRef("");

  const submitted = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    axios.post("http://localhost:3002/login", data).then((res) => {
      toast.succes("login successfully");
    });
  };
  return (
    <>
      <div className="container">
        <div class="row">
          <Toaster />
          <div class="col-md-3"></div>
          <div class="col-md-6 bg-warning">
            <h1 className="text-primary text-uppercase text-center text fw-bold display-5">
              Logic
            </h1>
            <form action="" method="post" onSubmit={submitted} className="m-5">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label" className="text-dark fw-bold">
                Email_id & Phone No
              </label>
              <input
                type="text"
                ref={email}
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Here "
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label" className="text-dark fw-bold">
                Password
              </label>
              <input
                type="text"
                ref={password}
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter here "
              />
            </div>
            <div class="text-center mb-5">
              <div class="btn btn-primary">
                <Link to="/login" className="btnc text-dark fw-bold">
                  <div class="">Login</div>
                </Link>
              </div>{" "}
              &nbsp;&nbsp;&nbsp;
              <span class="btn btn-primary ">
                <Link to="/sign" className=" btnc text-dark fw-bold">
                  <div>Sign up</div>
                </Link>
              </span>
            </div>
            </form>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Logic;
