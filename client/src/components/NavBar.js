import { Link } from "react-router-dom";
import Logout from './Logout';
import NavBarButton from "./NavBarButton";
import {UserContext} from "./App"
import { useContext } from "react";




function NavBar({user}){


  const LoggedIn = (
    <div className = "md:ml-auto flex flex-wrap items-center text-base justify-center">
    
    <div className = "mr-5"><Link to = "/all_posts"> All Posts</Link></div>
    <div className = 'mr-5'><Link to = {`/user/${user?.id}`}> Profile</Link></div>
    <NavBarButton/>

    
    </div>
    

  )

//   const LoggedOut = (

//     <>
//     <div><Link to = '/login'>Login</Link></div>
//     </>
//   )


   
    return(
        <div >
            
            {user ? LoggedIn : null}
            
        </div>
    )
    
}

export default NavBar;