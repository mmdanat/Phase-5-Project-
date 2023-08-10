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
        <div className='container px-10 py-10 mx-auto '>
            <div className = 'flex flex-wrap '>
                <div className = 'h-full bg-slate-100 bg-opacity-75 px-2 pt-4 pb-6 overflow-hidden rounded-md'>
            
                    
                    <img className ='' src = {image} alt = {title}/>
                    <div className='tracking-widest text-md title-font font-medium text-gray-400 mb-1'> {title}</div>
                    <p className='title-font text-sm '> {body}</p>
                    {/* <p className=''> Likes:{likes}</p> */}
                    <div className = ' w-1/3 bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 mt-4 ml-auto mr-auto text-center'><button onClick = {handleClick}>Delete Post</button></div>
                
                    <div className = ' w-1/3 bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 mt-4 ml-auto mr-auto text-center'><button onClick={() => handleEdit(post)}>Edit Post</button></div>
                </div>
           </div>
        
        </div>
    )

}
export default ProfilePagePosts;