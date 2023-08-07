import {useNavigate, useParams} from "react-router-dom"
import { useEffect,useState} from 'react';


function ProfilePagePosts({title,body,image,likes,id,handleEdit,post,setPosts}){
    
    
    const navigate = useNavigate()
    // const {id} = useParams();
    
    function handleClick(){
        
        fetch(`/posts/${id}`,{
            method: "DELETE"
        })
        .then((resp) => resp.json())
        .then(window.location.reload()) 
        //would like to make a pop up to ask if the user is sure that they want to delete #TODO
    }

    

    return(
        <div className=''>
           
            <div className=''> Post Title:{title}</div>
            <img className ='' src = {image} alt = {title}/>
            <p className=''> Post body:{body}</p>
            <p className=''> Likes:{likes}</p>
            <div><button onClick = {handleClick}>Delete Post</button></div>
            <div><button onClick={() => handleEdit(post)}>Edit Post</button></div>
        
        </div>
    )

}
export default ProfilePagePosts;