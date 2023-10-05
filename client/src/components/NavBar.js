import { Link, useNavigate } from "react-router-dom";
import NavBarButton from "./NavBarButton";



function NavBar({user,posts, handleSearch}){
  const navigate = useNavigate()
  // const [search,setSearch] = useState("")


  // function handleSearch(e){
  //   e.preventDefault()
    
  //  console.log(e.target.search.value)

  // }


  
  function handleClick(){

    navigate('/all_posts/new')
   }



  const LoggedIn = (
    
    <div className = " flex items-center  mt-4 mb-4 ml-16 ">
      <div><Link to= '/all_posts'><img className = "w-10 h-8 mr-2 hover:border " src = 'https://media.istockphoto.com/id/1137640747/vector/yummy-smile-vector-eating-emoji-face-icon.jpg?s=612x612&w=0&k=20&c=maEPAROCGT2W0wIZ9GmUk3dKDJIrFCxxehOntgUfVTs=' text = 'Home' alt = 'home' /></Link></div>
      <div className = 'mr-5'><NavBarButton/></div>
      <div className = 'mr-5 text-red-300 hover:text-red-400 text-xl '><button onClick = {handleClick}>CREATE POST</button></div>
      {/* <div className="flex justify-center "><Search handleSearch={handleSearch} /></div> */}
      {/* `<input type="text" className="searchTerm mr-2 rounded border p-2" name = "searchTerm" placeholder="" onChange ={handleSearch}/>` */}
      {/* <input type="text" placeholder="Search for ideas.." name = "searchTerm" onChange={handleSearch} className = 'mr-5 text-red-300 text-xl '/> */}
    </div>
    
  )

   
    return(
        <div className = 'flex' >
            {user ? LoggedIn : null}   
        </div>
        )
    
}

export default NavBar;

//Wanted to try and filter by category.
  // function handleSelect(){
  //   const postsFilteredByCategoryOne = posts.filter((post)=> {
  //     if (post.category_id === 1){
  //       console.log(post.category_id)
  //       return post
  //     }
  //   })

  //   const postsFilteredByCategoryTwo = posts.filter((post)=> {
  //     if (post.category_id === 2){
  //       return post
  //     }
  //   }) 
  // }

