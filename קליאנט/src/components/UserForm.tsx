// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { FormEvent, useContext, useState } from "react";
// import { UsersContext } from "./context/UserProvider";
// import axios from "axios";
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     borderRadius: '0px 20px',
//     boxShadow: 24,
//     p: 4,
// };
// interface UserFormProps {
//     isUpdate: boolean;
//     onClose: () => void;
// }
// const UserForm: React.FC<UserFormProps> = ({ isUpdate, onClose }) => {
//     const [formData, setFormData] = useState<{
//         firstName: string;
//         lastName: string;
//         email: string;
//         address: string;
//         phone: string;
//         password?: string;
//     }>({
//         firstName: '',
//         lastName: '',
//         email: '',
//         address: '',
//         phone: '',
//         password: isUpdate ? undefined : '',
//     });
//     const context = useContext(UsersContext);
//     if (!context) {
//         throw new Error("UserContext must be used within a UserProvider");
//     }
//     const { state, dispatch } = context;
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             const url = isUpdate ? 'http://localhost:8787/api/user' : 'http://localhost:8787/api/user/register';
//             const method = isUpdate ? axios.put : axios.post;
//             const res = await method(url, { ...formData }, {
//                 headers: isUpdate ? { 'user-id': state.id, 'Content-Type': 'application/json' } : {}
//             });
//             dispatch({ type: isUpdate ? 'UPDATE_USER' : 'Add_USER', data: res.data.user || res.data });
//             alert(isUpdate ? 'Update successful!' : 'Registration successful!');
//             setFormData({ firstName: '', lastName: '', email: '', address: '', phone: '', password: '' });
//             onClose();
//         } catch (e) {
//             alert(e);
//         }
//     };
//     return (
//         <Box sx={style}>
//             <form onSubmit={handleSubmit}>
//                 <Typography variant="h6" component="h2">{isUpdate ? 'Update' : 'Register'}</Typography>
//                 {['firstName', 'lastName', 'email', 'address', 'phone', !isUpdate && 'password'].map((field, index) => (
//                     field && (
//                         <TextField
//                             key={index}
//                             name={field}
//                             label={field.charAt(0).toUpperCase() + field.slice(1)}
//                             type={field === 'password' ? 'password' : 'text'}
//                             value={formData[field as keyof typeof formData]}
//                             onChange={handleChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                     )
//                 ))}
//                 <Button type="submit" variant="contained">{isUpdate ? 'Continue' : 'Save'}</Button>
//             </form>
//         </Box>
//     );
// };
// export default UserForm;