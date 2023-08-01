import {useNavigate, useParams} from "react-router-dom"


function UserPagePosts({title,body,image,likes,id}){

    const navigate = useNavigate()
  
    function handleClick(){
        
        fetch(`/posts/${id}`,{
            method: "DELETE"
        })
        .then((resp) => resp.json())
        .then(window.location.reload()) 
        //would like to make a pop up to ask if the user is sure that they want to delete #TODO
    }


    function handlePatchClick(){
     
       navigate(`/posts/${id}/edit`)
        
       }
    

    return(
        <div className=''>
           
            <div className=''> Post Title:{title}</div>
            <p className=''> Post body:{body}</p>
            <p className=''> Likes:{likes}</p>
            <div><button onClick = {handleClick}>Delete Post</button></div>
            <div><button onClick = {handlePatchClick}>Edit Post</button></div>
        
        </div>
    )

}
export default UserPagePosts;