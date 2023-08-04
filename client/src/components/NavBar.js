import { NavLink } from "react-router-dom";
import Logout from './Logout';
import NavBarButton from "./NavBarButton";
import {UserContext} from "./App"
import { useContext } from "react";




function NavBar({user}){

    // const user = useContext(UserContext)
    // console.log(statesetter)


   
    return(
        <div>
            Eat Together 

            <li><NavLink to = "/">Login</NavLink></li>
            {/* <li><NavLink to = "/logout">Logout</NavLink></li> */}
            <li><NavLink to = "/all_posts">All Posts</NavLink></li>
            <li><NavLink to = {`/user/${user?.id}`}>Profile</NavLink></li>
            <NavBarButton/>


            
            
        </div>
    )
    
}

export default NavBar;