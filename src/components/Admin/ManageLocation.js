import React, { useEffect, useState } from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import BootstrapDialog from './BootstrapDialog';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import 'reactjs-popup/dist/index.css';
import EditLocation from './EditLocation';
import ReactPaginate from "react-paginate";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { URL } from '../../url/url';
import { Abc } from '@mui/icons-material';


const ManageLocation = () => {
    const [dataName, setDataName] = useState([])
    const [search,setSearch] = useState("")
    const getData = async () => {
        await axios.get(URL + '/alllocationlist').then(res => {
            setDataName(res.data.message)
            console.log(res.data.message)
        }).catch(err => {
            console.log(err)
            //console.log("err")
        })
    }

    const Abc = (name) => {
        console.log(name)
    }

    useEffect(() => {
        getData()
    }, [])


   
    const [activeInactive, setActiveInactive] = useState(true)

    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const id = useParams()

    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(dataName.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };




    return (
        <>
        
            <div className="container-fluid ">
                <div className="add-location">
                    <div className="booking-wrapper">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="heading-top" >
                                    <h2>Manage Location</h2>
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
                            <div className="col-md-2 ">
                                <div className="boots">
                                    <BootstrapDialog />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button href="#/app/add-admin" class="head-button">Export</button>
                            </div>
                        </div>
                    </div>
                    <div className="manage-admins-main-area">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Parking Location</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Active/Inactive</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataName.filter(
                                        (row) =>
                                          !search.length ||
                                          row.location
                                            .toString()
                                            .toLowerCase()
                                            .includes(search.toString().toLowerCase()),
                                      )
                                      .slice(pagesVisited, pagesVisited + usersPerPage).map((item, i) => (
                                        <tr>
                                            <th scope="row">{i + pagesVisited + 1 }</th>
                                            <td>{item.location}</td>
                                            <td>
                                            <Link onClick={e=>alert(item.id)} ><EditLocation/></Link>
                                                <Link className="mange-admins-dlt-btn">
                                                    <DeleteForever onClick={() => { Abc('Manish') }} style={{ color: '#FF5C93' }} />
                                                </Link>
                                            </td>
                                            <td>
                                                <BootstrapSwitchButton
                                                    onlabel='Active'
                                                    checked={item.status == 0 ? false : true}
                                                    width={100}
                                                    offlabel='Inactive'
                                                    onstyle="success"
                                                    onChange={(checked) => {
                                                        console.log({ isUserAdmin: checked })
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div style={{ display: dataName.length > 5 ? "block" : "none" }}>
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
            <footer className="footer text-center"> 2022 ©Admin Panel brought to you by <a
                href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
            </footer>
        </>
    )
}

export default ManageLocation;