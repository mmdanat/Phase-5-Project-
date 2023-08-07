import { useState } from "react";
import { useContext } from "react";
import {UserContext} from "./App"



function NavBarButton(){
    // const user = useContext(UserContext)
    const [user,signedIn, setSignedIn] = useContext(UserContext)
    // console.log(user)
    
    
    return(
        <div>
            <button onClick = {() => setSignedIn(user)}>
                {user ? ` Hello ${user.first_name}` : ''}
            </button>

        </div>
    )
}

export default NavBarButton;