
function Logout({setUser}){

    function handleLogout(){
        fetch('/logout',{
            method:"DELETE",})
            .then (setUser(null))
    }
    

    return(
        <div>
            <button onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;