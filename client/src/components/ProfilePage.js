import { useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import ProfilePagePosts from './ProfilePagePosts';
import NavBar from './NavBar';




function ProfilePage({user, setUser, handleEdit,posts,setPosts}){
    const navigate = useNavigate()
    const params = useParams();
    console.log(user)
    

    useEffect(() => {
        fetch(`/user/${params.user}`)
        .then((resp) => resp.json())
        .then((user) => setUser(user))
        

    },[]) 
    
    let render_user_posts = []
    if (user) {
        const users_posts = user.posts 
        render_user_posts = users_posts.map((item) => 
        <ProfilePagePosts
            key ={item.id}
            id = {item.id}
            title = {item.title}
            body = {item.body}
            image = {item.image}
            likes = {item.likes}
            handleEdit = {handleEdit}
            post = {item}
            />
        )

    }else {
       return ("loading....unable to find user, please login")
    } 


  
    return(

        <div className = 'grid grid-cols-3'>
           
            {render_user_posts}
 

        </div>
    )
}

export default ProfilePage;