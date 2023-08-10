import { useParams} from "react-router-dom";
import { useState } from "react";

function UpdateLikes(){
    
    
    const params= useParams();
    const [likes, setLikes] = useState(0)

    

    function handleClickLikeButton(){
    
        

        fetch(`/posts/${params.id}`,{
          method:"PATCH",
          headers: {
            "Content-Type":"application/json"
        },
          body:JSON.stringify(likes)
    
        })
          .then(resp => resp.json())
          .then((likes)=>{
            console.log(likes + 1)
            // setLikes(likes + 1)
          })
        
    
    
      }

    return(
        <div>
           
            <div className="my-3"><button className = '' onClick ={handleClickLikeButton}> ❤️{likes}</button></div>

        </div>
    )
}

export default UpdateLikes;