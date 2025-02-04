import myImage from '../pictures/10394020.jpg'
const Home = () => {
  return (<>
    <img src={myImage} alt="" style={{ width: '100% ', height: 'auto' }} />
  </>)
}
export default Home



//import { combineSlices, configureStore } from "@reduxjs/toolkit";
// import Recipes from "../Recipes";
// import recipesSlice from "./recipeSlice";

// const rootReducer=combineSlices(recipesSlice)
// const store = configureStore({
// reducer: rootReducer
// });
// export type RootState = ReturnType<typeof store.getState>;
// export type AddDispatch=typeof store.dispatch;
// export default store;

// {
//   "error": {
//     "message": "request entity too large"
//   }
// }
// import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material"
// import React, { FormEvent, useContext, useState } from "react";
// import { UsersContext } from "./context/UserProvider";
// import axios from "axios";
// const style = {
// position: 'absolute',
// top: '50%',
// left: '50%',
// transform: 'translate(-50%, -50%)',
// width: 400,
// bgcolor: 'background.paper',
// border: '2px solid #000',
// borderRadius: '0px 20px',
// boxShadow: 24,
// p: 4,};
// const Registratio = () => {
// const [open, setOpen] = useState(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);
// const [formData, setFormData] = useState({
// firstName: '',
// lastName: '',
// email: '',
// password: '',
// address: '',
// phone: '',
// });
// const context = useContext(UsersContext);
// if (!context) {
// throw new Error("UserContext must be used within a UserProvider");
// }
// const { dispatch } = context;
// const[setErrorMessage]=useState('')
// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// setFormData({ ...formData, [event.target.name]: event.target.value })
// };
// const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
// event.preventDefault();
// try {
// const res = await axios.post('http://localhost:8787/api/user/register', {
// email: formData.email,
// password: formData.password,
// firstName: formData.firstName,
// lastName: formData.lastName,
// address: formData.address,
// phone: formData.phone,
// })
// if (res.data.message) {
// dispatch({
// type: 'Add_USER',
// data: res.data.user
// })
// alert('registration successfil')
// console.log(res);
// setOpen(false)
// }} catch(e){
// alert(e)}}
// return <>
// <Stack direction="row" spacing={2} sx={{ position: 'absolute', top: 0, left: 100, padding: '16px',zIndex:10 }}>
// <Button onClick={handleOpen} variant="contained" size="large">{'register'}</Button>
// </Stack>
// <Modal open={open} onClose={handleClose} >
// <Box sx={style}>
// <form onSubmit={handleSubmit}>
// <Typography id="modal-modal-title" variant="h6" component="h2">
// Login
// </Typography>
// <TextField name="email" label="userEmail" type="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
// <TextField name="password" label="password" type="password" value={formData.password} onChange={handleChange} fullWidth margin="normal" />
// <TextField name="firstName" label="firstName" type="firstName" value={formData.firstName} onChange={handleChange} fullWidth margin="normal" />
// <TextField name="lastName" label="lastName" type="lastName" value={formData.lastName} onChange={handleChange} fullWidth margin="normal" />
// <TextField name="phone" label="phone" type="phone" value={formData.phone} onChange={handleChange} fullWidth margin="normal" />
// <TextField name="address" label="address" type="address" value={formData.address} onChange={handleChange} fullWidth margin="normal" />
// <Button type="submit" variant="contained">save</Button>
// </form>
// </Box>
// </Modal>
// </>
// }
// export default Registratio












// import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material"
// import { FormEvent, useContext, useState } from "react";
// import { UsersContext } from "./context/UserProvider";
// import axios from "axios";
// const Update = () => {
// const [open, setOpen] = useState(false);
// const [formData, setFormData] = useState({
// firstName: '',
// lastName: '',
// email: '',
// address: '',
// phone: ''
// });
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);
// const context = useContext(UsersContext);
// if (!context) {
// throw new Error("UserContext must be used within a UserProvider");
// }
// const {state, dispatch } = context;
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// setFormData({ ...formData, [e.target.name]: e.target.value });
// };
// const handleSubmit = async (e: FormEvent) => {
// e.preventDefault();
// handleClose();
// try {
// const res = await axios.put('http://localhost:8787/api/user', {
// firstName: formData.firstName,
// lastName: formData.lastName,
// email:formData.email,
// address: formData.address,
// phone: formData.phone,
// },{
// headers: {
// 'user-id':state.id,
// 'Content-Type': 'application/json'
// }
// })
// if (res.data) {
// console.log('after upd');

//             dispatch({
//                 type: 'UPDATE_USER',
//                 data: res.data
//             });    
//             alert('Update successful!');
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 address: '',
//                 phone: '',
//               });
//             console.log(res);
//         }
//     } catch (e) {
//       alert(e)
//     }
// }
// return <>
//     <Stack direction="row" spacing={2} sx={{ position: 'absolute', top: 0, left: 0, padding: '16px',zIndex:12 }}>
//     <Button onClick={handleOpen} variant="contained" size="large">Update</Button>
//     </Stack>
//     <Modal open={open} onClose={handleClose}>
//         <Box sx={style}>
//             <form onSubmit={handleSubmit}>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                     Update
//                 </Typography>
//                 <TextField
//                     name="firstName"
//                     label="FirstName"
//                     type="text"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     fullWidth
//                     margin="normal"
//                 />
//                 <TextField
//                     name="lastName"
//                     label="LastName"
//                     type="text"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     fullWidth
//                     margin="normal"
//                 />
//                 <TextField
//                     name="email"
//                     label="Email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     fullWidth
//                     margin="normal"
//                 />
//                 <TextField
//                     name="address"
//                     label="Address"
//                     type="text"
//                     value={formData.address}
//                     onChange={handleChange}
//                     fullWidth
//                     margin="normal"
//                 />
//                 <TextField
//                     name="phone"
//                     label="Phone"
//                     type="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     fullWidth
//                     margin="normal"
//                 />
//                 <Button type="submit" variant="contained">Continue</Button>
//             </form>
//         </Box>
//     </Modal>
// </>
// }
// const style = {
// position: 'absolute',
// top: '50%',
// left: '50%',
// transform: 'translate(-50%, -50%)',
// width: 400,
// bgcolor: 'background.paper',
// border: '2px solid #000',
// borderRadius: '0px 20px',
// boxShadow: 24,
// p: 4,
// };
// export default Update