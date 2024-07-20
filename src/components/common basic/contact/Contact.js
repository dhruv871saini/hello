import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    f_name: "",
    email: "",
    feedback: "",
    phone: "",
    course: "",
    center: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3004/contact", data)
      .then((res) => {
        console.log(res.data); // Handle success response
        // Optionally, clear form data after successful submission
        setData({
          f_name: "",
          email: "",
          feedback: "",
          phone: "",
          course: "",
          center: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error); // Handle error
      });
  };

  return (
    <div className="container-fluid">
      <div className="container text-uppercase display-1 text-primary bg-warning pt-3 pb-3 text-center font-weight-bold main-poster">
        Contact Us
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container bgimage">
          <div className="row">
            <div className="col-md-2 mt-4 p-2 text-primary bold">Name:</div>
            <div className="col-md-4">
              <input
                className="w-100 mt-4 p-2"
                type="text"
                name="f_name"
                placeholder="Enter the full name"
                value={data.f_name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mt-4 p-2 text-primary bold">Phone No:</div>
            <div className="col-md-4">
              <input
                className="w-100 mt-4 p-2"
                name="phone"
                type="phone"
                placeholder="Enter the phone no"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mt-2 p-2 text-primary bold">Email Id:</div>
            <div className="col-md-4">
              <input
                className="w-100 mt-2 p-2"
                type="text"
                name="email"
                placeholder="Enter the official Email Id"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mt-2 p-2 text-primary bold">Center</div>
            <div className="col-md-4">
              <select
                className="w-100 mt-2 p-2"
                name="center"
                value={data.center}
                onChange={handleChange}
              >
                <option value="">---Select The Center---</option>
                <option value="Pitampura">Pitampura</option>
                <option value="Noida">Noida</option>
                <option value="Gurgoan">Gurgoan</option>
                <option value="Nangloi">Nangloi</option>
                <option value="Pachim vihar">Pachim vihar</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mt-2 p-2 text-primary bold">Course</div>
            <div className="col-md-4">
              <select
                className="w-100 mt-2 p-2"
                name="course"
                value={data.course}
                onChange={handleChange}
              >
                <option value="">---Select Course Name---</option>
                <option value="Java Full Stack">Java Full Stack</option>
                <option value="PHP Full Stack">PHP Full Stack</option>
                <option value="MERN Full Stack">MERN Full Stack</option>
                <option value="MEAN Full Stack">MEAN Full Stack</option>
                <option value=".NET Full Stack">.NET Full Stack</option>
              </select>
            </div>
          </div>
          <div className="container mt-2 p-2 bold text-primary bg-white">
            How can I help you? Feel free to ask anything about career...
          </div>
          <div className="container mt-2 p-2">
            <textarea
              style={{ height: "15vh" }}
              className="w-100"
              name="feedback"
              placeholder="Share your thoughts with our experts"
              value={data.feedback}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
