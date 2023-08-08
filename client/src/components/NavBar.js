import { Link } from "react-router-dom";
import Logout from './Logout';
import NavBarButton from "./NavBarButton";
import {UserContext} from "./App"
import { useContext } from "react";




function NavBar({user}){


  const LoggedIn = (
    
    <div className = "md:ml-auto flex flex-wrap items-center text-base justify-center">
    
      <div><img className = "w-10 h-8 mr-2"src = 'https://media.istockphoto.com/id/1137640747/vector/yummy-smile-vector-eating-emoji-face-icon.jpg?s=612x612&w=0&k=20&c=maEPAROCGT2W0wIZ9GmUk3dKDJIrFCxxehOntgUfVTs=' /></div>
      <div className = 'mr-5'><NavBarButton/></div>
      <div className = "mr-5"><Link to = "/all_posts"> All Posts</Link></div>
      <div className = 'mr-5'><Link to = {`/user/${user?.id}`}> View Profile</Link></div>
    

    
    </div>
    

  )

   
    return(
        <div >
            
            {user ? LoggedIn : null}
            
        </div>
    )
    
}

export default NavBar;