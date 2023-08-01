
import { Link ,useNavigate} from "react-router-dom";


function Logout({setUser}){
    const navigate = useNavigate()

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
            <button onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;