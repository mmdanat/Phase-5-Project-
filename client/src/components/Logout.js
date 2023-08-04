
import { Link ,useNavigate} from "react-router-dom";
import {UserContext} from "./App"
import { useContext } from "react";


function Logout({setUser}){
    const navigate = useNavigate()
    const [user] = useContext(UserContext)

    function handleLogout(){
        fetch('/logout',{
            method:"DELETE",})
            .then (() => {
                setUser(null)
                navigate('/login')
            
            })
    }
    

    return(
        <div>
            
            <button onClick = {handleLogout}>
            {user ? 'Logout' : ''}
            </button>
            
        </div>
    )
}

export default Logout;