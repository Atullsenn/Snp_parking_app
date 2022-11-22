import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { URL } from '../../url/url';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },


}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const id = useParams()
    const [data,setData] = useState([])

    //Get Location By ID Api
    const getLocationById = ()=>{
        let req = {id}
        console.log(req)
        axios.post(URL + '/getLocationByID',id,{
            Accept:'Application',
            'Content-type': 'application/json'
        }).then((res)=>{
            console.log("checking location by id")
            console.log(res)
            setData(res.data.data[0])
            console.log("checking location By id")
        }).catch(err=>console.log(err))
    }

    useEffect(()=>{
        getLocationById()
    },[])
    

    
    //Get Location By ID APi

    return (
        <div>
            <Link onClick={handleClickOpen} className="mange-admins-edit-btn"><i className="fas fa-edit"></i></Link>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Edit Location
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <input  type="text" defaultValue={data.location} placeholder='Enter Location' />
                </DialogContent>
                <DialogActions className=''>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                        Update
                    </Button>

                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}


