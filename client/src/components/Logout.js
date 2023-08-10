
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
        <div className="md:ml-auto mr-12 flex flex-wrap items-center ">
            
            <button onClick = {handleLogout}>
            <div className = 'mr-5 text-red-300 hover:text-red-400 uppercase text-xl'>{user ? 'Logout' : ''}</div>
            </button>
            
        </div>
    )
}

export default Logout;