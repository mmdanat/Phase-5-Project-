import {useState,useEffect} from 'react'
import CommentForm from './CommentForm';

function Comments({posts,postId}){
    const [comments, setComments] = useState([])
    

    useEffect(() =>{
        fetch('/all_comments')
        .then((response) => response.json())
        .then((comments) => {
            const post_comments = comments.filter((comment)=>{
                return comment.id == postId

            })

            setComments(post_comments)
        });
      },[])
      
    
    
    const render_comments = comments.map((comment) =>{
      
        return <div>{comment.text}</div>
     

    })

    
    return(
        <div>
            <div className = 'tracking-widest text-sm title-font font-medium'>Comments</div>
            <div className = ''>{render_comments}</div>
            <CommentForm setComments = {setComments} comments = {comments} postId = {postId}/>

        </div>
    )
}
export default Comments;