import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { UsersContext } from "./context/UserProvider";
import { useContext } from "react";
const Detailes = () => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }
    const { state } = context;
    console.log(state);
    return (<>
        <Stack color="green" direction="row" spacing={2} sx={{ position: "absolute", top: 0, left: 120, padding: '16px', zIndex: 12 }}>
            <Avatar alt={state.firstName ? state.firstName.charAt(0).toUpperCase() : state.email?.charAt(0).toUpperCase()} src="/static/images/avatar/1.jpg" />
            <div style={{ top: 1000, color: "white" }}>{state.firstName} {state.lastName}</div>
        </Stack>
    </>)
}
export default Detailes

