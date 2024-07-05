import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  // const [f_name, setf_name] = useState("");
  // const [email, setEmail] = useState("");
  // const [feedback, setFeedback] = useState("");
  // const [phone, setPhone] = useState("");
  // const [course, setCourse] = useState("");
  // const [center, setCenter] = useState("");

  // const handlerleEmailChange = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };

  // const handlerleCenterChange = (e) => {
  //   console.log(e.target.value);
  //   setCenter(e.target.value);
  // };

  // const handlerleCourseChange = (e) => {
  //   console.log(e.target.value);
  //   setCourse(e.target.value);
  // };

  // const handlerleFeedbackChange = (e) => {
  //   console.log(e.target.value);
  //   setFeedback(e.target.value);
  // };
  // const handelphonechange = (e) => {
  //   console.log(e.target.value);
  //   setPhone(e.target.value);
  // };

  // const handleNamechange = (e) => {
  //   console.log(e.target.value);
  //   setf_name(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(f_name, email, feedback, phone, course, center);
  //     setf_name("");
  //     setEmail("");
  //     setFeedback("");
  //     setPhone("");
  //     setCourse("");
  //     setCenter("");
  //   };






  // <div class="mb-3">
  //               <label for="formGroupExampleInput" class="form-label">
  //                 Full Name
  //               </label>
  //               <input
  //                 type="text"
  //                 name="f_name"
  //                 onChange={handler}
  //                 class="form-control"
  //                 id="formGroupExampleInput"
  //                 placeholder="Enter  Full name "
  //               />
  //             </div>
  const [data, setdata] = useState({
    f_name: "",
    email: "",
    feedback: "",
    phone: "",
    course: "",
    center: "",
  });
  const handler = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    axios.post("http://localhost:3004/contact", data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="container text-uppercase display-1 text-primary bg-warning pt-3 pb-3 text-center font-weight-bold main-poster">
          contact us
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
                  onChange={handler}
                />
              </div>
              <div className="col-md-2 mt-4 p-2 text-primary bold">
                Phone No:
              </div>
              <div className="col-md-4">
                <input
                  className="w-100 mt-4 p-2"
                  name="phone"
                  type="phone"
                  placeholder="Enter the phone no"
                  onChange={handler}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 mt-2 p-2 text-primary bold">
                Email Id:
              </div>
              <div className="col-md-4">
                <input
                  className="w-100 mt-2 p-2"
                  type="text"
                  name="email"
                  placeholder="Enter the official Email Id"
                  onChange={handler}
                />
              </div>
              <div className="col-md-2 mt-2 p-2 text-primary bold">Center</div>
              <div className="col-md-4">
                <select
                  className="w-100 mt-2 p-2"
                  name="center"
                  onChange={handler}
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
                  onChange={handler}
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
                placeholder="Share your thought with our experts"
                onChange={handler}
              ></textarea>
            </div>
            <div >
              <button class="btn btn-primary">submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
