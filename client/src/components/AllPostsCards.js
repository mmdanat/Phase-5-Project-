
function AllPostsCards({title,body,image,likes,id}){
    // console.log("here")
    return(
        <div>
            {/* <a href = {`/user/${id}`}> */}
                <div className=''>
                    <div className=''><img className="" src={image} alt={title} /></div>
                </div>
                <div className=''>
                    <div className=''> {title}</div>
                    <p className=''> Recipe:{body}</p>
                    <p className=''> ❤️{likes}</p>
                    
                    
                </div>
                


            {/* </a> */}
        </div>
    )
}


export default AllPostsCards;