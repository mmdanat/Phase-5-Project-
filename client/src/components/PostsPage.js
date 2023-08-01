import AllPostsCards from "./AllPostsCards";
import NavBar from "./NavBar";

function PostsPage({posts}){


    const renderposts = posts.map((post)=> 
       
    <AllPostsCards
        key ={post.id}
        id = {post.id}
        title = {post.title}
        body = {post.body}
        image = {post.image}
        likes = {post.likes}   
    />)


    return(
        <div>
            {/* <NavBar/> */}
            {renderposts}
        </div>
    )
}

export default PostsPage;