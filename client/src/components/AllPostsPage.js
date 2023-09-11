import AllPostsCards from "./AllPostsCards";
import NavBar from "./NavBar";
import Comments from "./Comments";

function AllPostsPage({posts, user, setPosts}){


    const renderposts = posts.map((post)=> 
       
    <AllPostsCards
        key ={post.id}
        id = {post.id}
        title = {post.title}
        body = {post.body}
        image = {post.image}
        likes = {post.likes}  
        user = {user}
        setPosts = {setPosts}
        
        
        
    />)


    return(
        <div>
            {/* <NavBar/> */}
            {renderposts}
            
        </div>
    )
}

export default AllPostsPage;