import { NavLink } from "react-router-dom";
import Logout from './Logout';


function NavBar({user}){

    return(
        <div>
            Eat Together 

            <li><NavLink to = "/">Login/SignUP</NavLink></li>
            {/* <li><NavLink to = "/logout">Logout</NavLink></li> */}
            <li><NavLink to = "/all_posts">All Posts</NavLink></li>
            <li><NavLink to = {`/user/${user?.id}`}>Profile</NavLink></li>


            
            
        </div>
    )
    
}

export default NavBar;