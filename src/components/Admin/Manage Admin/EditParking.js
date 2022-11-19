import React, { useEffect, useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import {
    Paper,
    Box,
    Grid,
    TextField,
    Button,
    CircularProgress
} from "@material-ui/core";
import useStyles from "../styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, useParams } from 'react-router-dom';
import {URL} from '../../../url/url';


toast.configure();
export default function EditParking() {
    const initialValue = {
        parking_name: "",
      };
    var classes = useStyles();
    let history = useHistory();
    const id = useParams()
    const [isLoading, setIsLoading] = useState(false);
    const [isSecond, setIsSecond] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [data,setData] = useState([initialValue]);

    const handleOnChange = () => {
        setIsChecked(!isChecked)
    }
    const secondOnChange = () => {
        setIsSecond(!isSecond)
    }
    const [location, setLocation] = useState();
    const locationlist = async () => {
        await axios.get(URL + '/locationlist').then(res => {
            var totallocation = res.data.data;
            setLocation(res.data.data)

        }).catch(err => {
            console.log(err)
        })
    }


    //Get Parking Details By ID
    useEffect(() => {
        GetParkingDetailsByID();
      }, []);
    
      const GetParkingDetailsByID = () => {
        let request = { id };
       
        axios
          .post(URL + "/getoneParking", id, {
            Accept: "Application/json",
            "Content-Type": "Application/json",
          })
          .then((res) => {
            setData(res.data.data[0]);
            // console.log('response')
            // console.log(res);
            // console.log('response')
          })
          .catch((err) => console.log(err));
      };
   

    //Get Parking Details By ID

    return (<>
        <div className="container-fluid">
            <div className="add-location">

                <div >
                    <h1 className='heading-add-parking'>Edit Parking</h1>
                    <Paper>
                        <Box px={3} py={2}>
                            <Grid container spacing={4}>

                                <Grid item md={12} xs={12} sm={6}>
                                    <TextField
                                        required
                                        className="textfieldmui"
                                        id="name"
                                        name="name"
                                        label="Parking Name"
                                        defaultValue={data.parking_name}
                                        variant='outlined'
                                        fullWidth
                                        margin="dense"
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} sm={6}> 
                                    <select class="form-select" style={{ padding: '12px', height: '45px', fontSize: '16px', color: '#4A4A4A', border: '1px solid #c4c4c4', borderRadius: '5px' }} aria-label="Default select example" onClick={locationlist}>

                                    {
                                        location &&Object.keys(location).map((element)=>{
                                            
                                            return( 
                                                <option>{location[element].location}</option>
                                            )
                                        })
                                    }

                                    </select>
                                    
                                </Grid>
                                <Grid item md={12} xs={12} sm={6}>
                                    <TextField
                                        required

                                        id="capacity"
                                        name="capacity"
                                        label="Capacity"
                                        variant='outlined'
                                        fullWidth
                                        margin="dense"

                                    />
                                </Grid>
                                <Grid item md={12} xs={12} sm={6}>
                                    <div className="days">
                                        <label htmlFor="">No. of days :</label>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sun"  value={0}/>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Mon"  value={1}/>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Tus" value={1} />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Wed" />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Thu" />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Fri" />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sat" />
                                        </FormGroup>
                                    </div>

                                </Grid>
                                <Grid item md={12} xs={12} sm={6}>
                                    <div className="days">

                                        <label >Vechiel Type :</label>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Two Wheeler"
                                                checked={isChecked}
                                                onChange={handleOnChange}
                                            />


                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Four Wheeler"
                                                checked={isSecond}
                                                onChange={secondOnChange} 
                                                />
                                        </FormGroup>
                                    </div>
                                </Grid>

                                <Grid item md={12} xs={12} sm={6}>
                                    {isChecked ?
                                        <TextField
                                            required
                                            id="location"
                                            name="location"
                                            label="Amount of Two Wheeler"
                                            defaultValue={data.veichle_type_two_wheeler_rent}
                                            variant='outlined'
                                            fullWidth
                                            margin="dense"
                                        />
                                        : ''}
                                    {isSecond ?
                                        <TextField
                                            required
                                            id="location"
                                            name="location"
                                            label="Amount of Four Wheeler"
                                            variant='outlined'
                                            defaultValue={data.veichle_type_four_wheeler_rent}
                                            fullWidth
                                            margin="dense"
                                        />
                                        : ''}

                                </Grid>
                            </Grid>
                            <Box mt={3}>
                                {isLoading ? (
                                    <CircularProgress size={26} className={classes.loginLoader} />
                                ) : (
                                    <Button
                                        variant="contained"
                                        size="large"
                                    >
                                        Update
                                    </Button>
                                )}
                            </Box>

                        </Box>

                    </Paper>
                </div>
            </div>
        </div></>);
}


