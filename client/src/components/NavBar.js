import { Link, useNavigate } from "react-router-dom";
import Logout from './Logout';
import NavBarButton from "./NavBarButton";
import {UserContext} from "./App"
import { useContext } from "react";




function NavBar({user}){
  const navigate = useNavigate()

  function handleClick(){

    navigate('/all_posts/new')

   }



  const LoggedIn = (
    
    <div className = " flex items-center  mt-4 mb-4 ml-16 ">
    
      <div><Link to= '/all_posts'><img className = "w-10 h-8 mr-2 hover:border " src = 'https://media.istockphoto.com/id/1137640747/vector/yummy-smile-vector-eating-emoji-face-icon.jpg?s=612x612&w=0&k=20&c=maEPAROCGT2W0wIZ9GmUk3dKDJIrFCxxehOntgUfVTs=' text = 'Home' alt = 'home' /></Link></div>
      <div className = 'mr-5'><NavBarButton/></div>
      {/* <div className = "mr-5"><Link to = "/all_posts"> All Posts</Link></div> */}
      {/* <div className = 'mr-5 text-red-300 hover:text-red-400 uppercase text-xl'><Link to = {`/user/${user?.id}`}> Profile</Link></div> */}
      <div className = 'mr-5 text-red-300 hover:text-red-400 text-xl '><button onClick = {handleClick}>CREATE POST</button></div>

    
    </div>
    

  )

   
    return(
        <div className = 'flex' >
          
            {user ? LoggedIn : null}
          
            
        </div>
    )
    
}

export default NavBar;