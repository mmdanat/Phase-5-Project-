
function AllPostsCards({title,body,image,likes,id}){
    // console.log("here")
    return(
        <div>
            {/* <a href = {`/user/${id}`}> */}
                <div className=''>
                    <div className=''><img className="" src={image} alt={title} /></div>
                </div>
                <div className=''>
                    <div className=''> Post Title{title}</div>
                    <p className=''> Post body:{body}</p>
                    <p className=''> likes:{likes}</p>
                    
                </div>
                


            {/* </a> */}
        </div>
    )
}


export default AllPostsCards;