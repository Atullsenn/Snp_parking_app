import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination'
import NotificationList from '../../Admin/NotificationList'
import axios from "axios";
const AllNotification = () => {

  // const [type, setType] = useState(1);

  // const [data, getData] = useState([]);
  const [data, setDataName] = useState([])
  const getData = async () => {
    await axios.get('http://localhost:5000/getNotifications').then(res => {
      setDataName(res.data.message)
      console.log(res.data.message)
      console.log("checking dataaaaaaaaaaaaaa")
    }).catch(err => {
      console.log(err)
      console.log("err")
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="page-wrapper" >
      <div className="container-fluid">
        <div className="add-location">

          <div className="row">
            <div className="col-md-6">
              <div className="heading-top" >
                <h2>Notification List</h2>
              </div>
            </div>
            <div className="col-md-3">
            </div>
            <div className="col-md-3 add-notification">
              <NotificationList />
            </div>
            <div className="manage-admins-main-area">
              <div className="manage-admins-table-area">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sr. no.</th>
                      <th>Customer Name</th>
                      <th>Title</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    data.map((item,i)=>(

                    
                  
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        {item.user_id}
                      </td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        {item.date}
                      </td>
                      <td>
                        <Link
                          to={`/app/notification-details/`}
                          className="mange-admins-edit-btn"
                        >
                          <i class="fas fa-eye"></i>
                        </Link>
                        <Link
                          to={`/app/notifications/`}


                          className="mange-admins-dlt-btn"
                        >
                          <i class="far fa-trash-alt"></i>
                        </Link>
                      </td>
                    </tr>
                     
                    ))}
                  </tbody>
                </table>
                <Pagination count={10} color="primary" />

              </div>
            </div>

          </div>

        </div>
      </div>
      <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
        href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
      </footer>
    </div >
  );
};

export default AllNotification;
