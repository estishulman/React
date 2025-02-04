import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material"
import { FormEvent, useContext, useState } from "react";
import { UsersContext } from "./context/UserProvider";
import axios from "axios";
const Update = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: ''
    });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }
    const {state,  dispatch } = context;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        handleClose();
        try {
            const res = await axios.put('http://localhost:8787/api/user', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email:formData.email,
                address: formData.address,
                phone: formData.phone,
            },{
                headers: {
                    'user-id':state.id,
                    'Content-Type': 'application/json'
                }
            })
            if (res.data) {
                console.log('after upd');
                
                dispatch({
                    type: 'UPDATE_USER',
                    data: res.data
                });    
                alert('Update successful!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    address: '',
                    phone: '',
                  });
                console.log(res);
            }
        } catch (e) {
          alert(e)
        }
    }
    return <>
        <Stack direction="row" spacing={2} sx={{ position: 'absolute', top: 0, left: 0, padding: '16px',zIndex:12 }}>
        <Button onClick={handleOpen} variant="contained" size="large">Update</Button>
        </Stack>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update
                    </Typography>
                    <TextField name="firstName"label="FirstName"type="text" value={formData.firstName} onChange={handleChange}fullWidth margin="normal"/>
                    <TextField name="lastName"label="LastName" type="text"value={formData.lastName}onChange={handleChange}fullWidth margin="normal"/>
                    <TextField name="email"label="Email"type="email"value={formData.email}onChange={handleChange}fullWidth margin="normal"/>
                    <TextField name="address"label="Address"type="text"value={formData.address}onChange={handleChange}fullWidth margin="normal" />
                    <TextField name="phone"label="Phone"type="phone"value={formData.phone}onChange={handleChange}fullWidth margin="normal" />
                    <Button type="submit" variant="contained">Continue</Button>
                </form>
            </Box>
        </Modal>
    </>
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '0px 20px',
    boxShadow: 24,
    p: 4,
};
export default Update