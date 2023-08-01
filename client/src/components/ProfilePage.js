import { useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import UserPagePosts from './UserPagePosts';
import NavBar from './NavBar';




function ProfilePage({user, setUser}){
    const navigate = useNavigate()
    const params = useParams();

    useEffect(() => {
        fetch(`/user/${params.user}`)
        .then((resp) => resp.json())
        .then((user) => setUser(user))

    },[]) 
   
    let render_user_posts = []
    if (user) {
        const users_posts = user.posts 
        render_user_posts = users_posts.map((item) => 
        <UserPagePosts
            key ={item.id}
            id = {item.id}
            title = {item.title}
            body = {item.body}
            image = {item.image}
            likes = {item.likes}/>
        )

    }else {
       return ("loading....unable to find user, please login")
    } 

   function handleClick(){

    navigate('/all_posts/new')

   }

   
   
       
    return(

        <div>
            {/* <NavBar/> */}
            {`Hello ${user.first_name}`}
            <div><button onClick = {handleClick}>Create Post</button></div>
            {render_user_posts}
            
            

        </div>
    )
}

export default ProfilePage;