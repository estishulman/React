import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import React, { FormEvent, useContext, useState } from "react";
import { UsersContext } from "./context/UserProvider";
import axios from "axios";

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

const Registration = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const context = useContext(UsersContext);

    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }

    const { dispatch } = context;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');  // Reset the error message
        try {
            const res = await axios.post('http://localhost:8787/api/user/register', {
                email: formData.email,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName,
                address: formData.address,
                phone: formData.phone,
            });

            if (res.data.message) {
                dispatch({
                    type: 'Add_USER',
                    data: res.data.user
                });
                alert('Registration successful');
                setOpen(false);
            }
        } catch (e: any) {
            setErrorMessage(e.response?.data?.message || 'An error occurred during registration');
            alert('Registration failed');
        }
    };

    return (
        <>
            <Stack direction="row" spacing={2} sx={{ position: 'absolute', top: 0, left: 100, padding: '16px', zIndex: 10 }}>
                <Button onClick={handleOpen} variant="contained" size="large">Register</Button>
            </Stack>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Register
                        </Typography>
                        {errorMessage && <Typography color="error" variant="body2">{errorMessage}</Typography>}
                        
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="firstName"
                            label="First Name"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="address"
                            label="Address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained">Save</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default Registration;
