import AllPostsCards from "./AllPostsCards";


function AllPostsPage({posts, user, setPosts}){


    const renderposts = posts.map((post)=> 
       
    <AllPostsCards
        key ={post.id}
        id = {post.id}
        title = {post.title}
        body = {post.body}
        image = {post.image}
        likes = {post.likes}  
        posts = {posts}
        user = {user}
        setPosts = {setPosts}
        
        
        
    />)


    return(
        <div>
            
            {renderposts}
            
        </div>
    )
}

export default AllPostsPage;