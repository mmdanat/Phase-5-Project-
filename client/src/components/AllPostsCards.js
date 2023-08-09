import Comments from './Comments'


function AllPostsCards({title,body,image,likes,id,user,posts, setPosts}){


    function handleClickLikeButton(){
    

        fetch(`/posts/${id}`,{
          method:"PATCH",
          headers: {
            "Content-Type":"application/json"
        },
          body:JSON.stringify({likes: likes + 1})
    
        })
          .then(resp => resp.json())
          .then((updatedPost)=>{
            const new_posts = posts.map((post)=>{
                if(post.id === updatedPost.id){
                    return updatedPost
                }else{
                    return post
                }

            })
            setPosts(new_posts)
          })
        
    
    
      }
   
    return(

        <div className = 'text-gray-600 body-font '>
            <div className = 'container px-5 py20 mx-auto border  '>
                <div className ='flex flex-wrap m-4'>
                    <div className = 'p-4 md:w-1/3'>
                        <div className = 'h-full bg-slate-100 bg-opacity-75 px-2 pt-4 pb-6 overflow-hidden rounded-md'>
                            <div>
                                <div ><img src={image} alt={title} /></div>
                            </div>
                            <div className = 'p-2'>
                                <div className='tracking-widest text-md title-font font-medium text-gray-400 mb-1'> {title}</div>
                                <div className='title-font text-sm '>{body}</div>
                                        
                                <div><button className = '' onClick = {handleClickLikeButton}> ❤️{likes}</button></div>
                                
                                <Comments user = {user} posts ={posts} postId ={id}/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default AllPostsCards;