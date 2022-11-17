import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },


}));

function NotificationList(props) {


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

NotificationList.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
const currencies = [
    {
        value: 'USD',
        label: 'All',
    },
    {
        value: 'EUR',
        label: 'Saurav',
    },
    {
        value: 'BTC',
        label: 'sirf mai',
    },
    {
        value: 'JPY',
        label: 'kala',
    },
];
export default function CustomizedDialogs() {


    const [currency, setCurrency] = React.useState();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Add Notification
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <NotificationList id="customized-dialog-title" onClose={handleClose}>
                    Notification
                </NotificationList>
                <DialogContent dividers>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='notification-field'>

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Customer Name"
                                value={currency}
                                onChange={handleChange}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>


                        </div>


                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='notification-field'>

                        </div>
                        <div className='notification-field'>

                            <TextField
                                id="outlined-textarea"
                                label="Title"
                                placeholder="Placeholder"
                                fullWidth
                                multiline
                            />
                        </div>
                        <div className='notification-field'>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"

                                multiline
                                rows={4}
                            />
                        </div>


                    </Box>


                </DialogContent>
                <DialogActions className=''>
                    <Button autoFocus onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                        Send
                    </Button>

                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
