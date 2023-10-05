
import { useContext } from "react";
import {UserContext} from "./App"
import { Link } from "react-router-dom";




function NavBarButton(){
    const [user,signedIn, setSignedIn] = useContext(UserContext)
  
    
    
    return(
        <div >
           
            <button onClick = {() => setSignedIn(user)}>
               <div className = 'text-red-300 hover:text-red-400 uppercase text-xl' ><Link to = {`/user/${user?.id}`}> {user ? `Welcome ${user.first_name}!` : ''}</Link></div>
            </button>
            

        </div>
    )
}

export default NavBarButton;