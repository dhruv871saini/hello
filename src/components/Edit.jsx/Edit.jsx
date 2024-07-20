import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const params=useParams()
    const navigate=useNavigate()
    const [data, setdata] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3004/contact/"+params.id)
      .then((res) => setdata(res.data))      
    }, [])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3004/contact/"+params.id,data)
        .then((res)=>{
            toast.success("data updated")
        })
        .then((res)=>navigate("/database"))

    }

    const handler=(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }
  return (
    <div>
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
                  value={data.f_name}
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
                  value={data.phone}
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
                  value={data.email}
                />
              </div>
              <div className="col-md-2 mt-2 p-2 text-primary bold">Center</div>
              <div className="col-md-4">
                <select
                  className="w-100 mt-2 p-2"
                  name="center"
                  onChange={handler}
                  value={data.center}
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
                  value={data.course}
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
                value={data.feedback}
              >
        
              </textarea>
            </div>
            <div >
              <button class="btn btn-primary">submit</button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Edit
