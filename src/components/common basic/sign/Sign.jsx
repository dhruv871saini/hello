import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sign extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 ">
              <div className="container-fluid cont_main">
                <h2 className="text-primary text-uppercase container pl-4 pr-4 text-center mt-3 mb-2 ">
                  registration
                </h2>

                <div className="container pl-4 pr-4 text-center mt-3 mb-2 ">
                  <input
                    className="w-75 "
                    style={{ height: "45px" }}
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="container pl-4 pr-4 text-center mt-3 mb-2">
                  <input
                    className="w-75"
                    style={{ height: "45px" }}
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="container pl-4 pr-4 text-center mt-3 mb-2">
                  <input
                    className="w-75"
                    style={{ height: "45px" }}
                    type="password"
                    placeholder="Create password"
                  />
                </div>
                <div className="container pl-4 pr-4 text-center mt-3 mb-2">
                  <input
                    className="w-75"
                    style={{ height: "45px" }}
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="container pl-4 pr-4 text-center mt-3 mb-2">
                  <input className="check" type="checkbox" />{" "}
                  <span className="mx-auto">
                    I accept all terms & conditons
                  </span>
                  <div className="btn btn-primary ml-3">register now</div>
                  <div className="lasst">
                    Already have a account{" "}
                    <Link className="text-decoration-none" to="/login">
                      login Now
                    </Link>
                  </div>
                </div>
                <div class="container pl-4 pr-4 text-center mt-3 mb-2">
                  <div class="btn btn-primary text-center">DONE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
