import React, { useState,useEffect } from "react";
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link, useParams } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReactPaginate from "react-paginate";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import axios from 'axios';



const ManageAdmin = () => {
    const [datas, setDatas]=useState([])
    const [search, setSearch] = useState("")

    const getData = async () => {
        await axios.get('http://localhost:5000/getparking').then(res => {
            setDatas(res.data.message)
            console.log(res.data.message);
        }).catch(err => {
            console.log(err)
            console.log("err")
        })
    }
    useEffect(() => {
        getData();
    }, [])


    const [activeInactive, setActiveInactive] = useState(true)

    //pagination
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(datas.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };


    //pagination

    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="heading-top" >
                                        <h2>Manage Parking</h2>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="table-data-search-box-manage">
                                        <div className="search-bar" >
                                            <input type="text" onChange={(e)=>setSearch(e.target.value)} className="searchTerm-input" placeholder="Search" />
                                            <button type="submit" className="searchButtons">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button class="head-button"><Link to={`/app/add-admin`} > Add Location</Link></button>
                                </div>
                            </div>



                            <div className="manage-admins-main-area">
                                <div className="manage-admins-table-area">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Parking Name</th>
                                                <th>Location</th>
                                                <th>Capcity </th>
                                                <th>Details</th>
                                                <th>Status</th>

                                                <th>Action</th>
                                                <th>Active/Inactive</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                datas.filter(
                                                    (row) =>
                                                      !search.length ||
                                                      row.parking_name
                                                        .toString()
                                                        .toLowerCase()
                                                        .includes(search.toString().toLowerCase()),
                                                  )
                                                  .slice(pagesVisited, pagesVisited + usersPerPage).map((item,i)=>(

                                            <tr >
                                                <td>{i + pagesVisited + 1}</td>
                                                <td>
                                                    <div className="user-icon-detail-area">
                                                        <div className="company-user-icon-area">
                                                            {item.parking_name}
                                                        </div>

                                                    </div>
                                                </td>
                                                <td>{item.location_id}</td>
                                                <td>{item.capacity}</td>
                                                <td><VisibilityIcon /></td>
                                                <td>full/remain</td>
                                                <td>
                                                    <Link  to={`/app/editparking/}`} className="mange-admins-edit-btn"><i className="fas fa-edit"></i></Link>
                                                    <Link to={`/app/admin/`} className="mange-admins-dlt-btn">                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <BootstrapSwitchButton
                                                        width={100}
                                                        checked={item.status}
                                                        onlabel='Active'
                                                        offlabel='Inactive'
                                                        onstyle="success"
                                                        onChange={() => {
                                                            setActiveInactive(!activeInactive);

                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                                ))

                                                    }

                                        </tbody>

                                    </table>
                                    <div style={{ display: datas.length > 5 ? "block" : "none" }}>
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
                href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
            </footer>
        </>
    );
};

export default ManageAdmin;






// {data.map((item, i) => (
//     <tr key={i}>
//         <td>{item.userId}</td>
//         <td>{item.id}</td>
//         <td>{item.title}</td>
//         <td>{item.body}</td>
//     </tr>
// ))}