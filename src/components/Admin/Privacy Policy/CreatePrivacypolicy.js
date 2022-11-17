import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../../url/url";


const CreatePrivacypolicy = () => {
    var [heading, setHeading] = useState([]);
    var[description,setDescription]= useState([]);
    const submit= (e)=>{
        console.log(heading,description);
        let data= {heading,description}
        fetch("http://localhost:5000/addPrivacyPolicy",{
          method:"POST",
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },body:JSON.stringify(data)
            
        }).then((result)=>{
          result.json().then((data)=>{
            console.log(data)
          })
        }).catch((error)=>{
          console.log(error)
        })
      
    }

    useEffect(() => {
        getData1();
        
      }, []);
      const getData1 = async()=>{
        await axios.get("http://localhost:5000/getprivacypolicy").then((res)=>{
          console.log(res.data[0].heading);
          console.log(res.data[0].description);
          setHeading(res.data[0].heading);
          setDescription(res.data[0].description);
    
        }).catch((err)=>{
          console.log(err)
        })
        
      }


        return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area">
                                <h2>Create Privacy & Policy</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-notification-detail-main-area">
                                <form className="send-notifications-form-area">
                                    <div className="form-group">
                                        <label>Heading</label>
                                        <input type="text" className="form-control field"   name="holdername" placeholder="Enter Heading" autofocus="" required="" id="name"  value={heading} onChange={(e)=>{
                                            setHeading(e.target.value)
                                        }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control"   placeholder="Enter Description" value={description}  onChange={(e)=>{
                                           setDescription(e.target.value)
                                        }}></textarea>
                                    </div>
                                    <div className="contact-form-submint-btn-area">
                                        <a href="#"  className="contact-form-submint-btn" onClick={submit}>Submit</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
                    href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
                </footer>
            </div>
        </>
    );
};

export default CreatePrivacypolicy;