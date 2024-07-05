import axios from 'axios';
import ReactPaginate from 'react-paginate';
import "./database.css"

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Database1 = () => {

    const [data, setData] = useState([]);
    const [store, setstore] = useState([])
    const [page, setpage] = useState(0)
    const n=10;
  
  
    useEffect(() => {
      axios.get("http://localhost:3004/contact")
        .then((res) => {
          setData(res.data);
          setstore(res.data.slice(page*n,page*n+n))
        })
        .catch((error) => {
          toast.error("Can't fetch the data");
        });
    }, [data]);
  
    const deleteData = (id) => {
      if (window.confirm("Are you sure you want to delete the data permanently?")) {
        axios.delete(`http://localhost:3004/contact/${id}`)
          .then((res) => {
            toast.success("Data deleted successfully");
            // Remove the deleted item from state to update the UI
            // setData(data.filter(item => item.id !== id));
          })
          .catch((error) => {
            toast.error("Can't delete the data");
          });
      } else {
        console.log("Deletion cancelled");
      }
    };
  
    const handleClickPage=(e)=>{
      const selectedpage= e.selected;
      setpage(selectedpage)
    }
  return (
    <div>
       <div className="container">
      <div className="row">
        <div className="col-md-12 text-capitalize text-center text-danger fw-bold">
          <h1>Login Customer Database</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover table-striped">
            <thead className="bg-primary">
              <tr className="text-uppercase">
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>course</th>
                <th>center</th>
                <th>feedback</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.f_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.course}</td>
                  <td>{item.center}</td>
                  <td>{item.feedback}</td>
                  <td  className="text-uppercase">
                    <Link className="btn btn-primary" to={`/edit/${item.id}`}>edit</Link>{" "}&nbsp;
                    <button className="btn btn-danger" onClick={() => deleteData(item.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
       
    <ReactPaginate
      containerClassName={"pagination justify-content-center"} // Bootstrap class for centering pagination
      pageClassName={"page-item"} // Bootstrap class for pagination items
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      pageLinkClassName={'page-link p-2 border rounded'} // Bootstrap class for pagination links
      previousClassName={'page-item'} // Bootstrap class for previous button container
      previousLinkClassName={'page-link p-2 border rounded'} // Bootstrap class for previous button link
      nextClassName={'page-item'} // Bootstrap class for next button container
      nextLinkClassName={'page-link p-2 border rounded'} // Bootstrap class for next button link
      breakClassName={'page-item'} // Bootstrap class for break item container
      breakLinkClassName={'page-link p-2 border rounded'} // Bootstrap class for break item link
      activeClassName={'active bg-primary'} // Bootstrap class for active page
      onPageChange={handleClickPage}
      pageCount={Math.ceil(data.length / n)}
      breakLabel="..."
      previousLabel={'Previous'}
      nextLabel={'Next'}
    />

          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Database1
