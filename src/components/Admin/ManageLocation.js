import React, { useEffect, useState } from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import BootstrapDialog from './BootstrapDialog';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import 'reactjs-popup/dist/index.css';
import EditLocation from './EditLocation';
import Pagination from '@mui/material/Pagination'
import axios from 'axios';
import { Abc } from '@mui/icons-material';


const ManageLocation = () => {
    const [dataName, setDataName] = useState([])
    const getData = async () => {
        await axios.get('http://localhost:5000/alllocationlist').then(res => {
            setDataName(res.data.message)
            console.log(res.data.message)
        }).catch(err => {
            console.log(err)
            console.log("err")
        })
    }

    const Abc = (name) => {
        console.log(name)
    }

    useEffect(() => {
        getData()
    }, [])


   
    const [activeInactive, setActiveInactive] = useState(true)


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
                                        <input type="text" className="searchTerm-input" placeholder="Search" />
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
                                    dataName.map((item) => (
                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.location}</td>
                                            <td>
                                            <Link ><EditLocation/></Link>
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
                        <Pagination count={10} color="primary" />
                    </div>

                </div>

            </div>
            <footer className="footer text-center"> 2022 ©Admin Panel brought to you by <a
                href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
            </footer>
        </>
    )
}

export default ManageLocation