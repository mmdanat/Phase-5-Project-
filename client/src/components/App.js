import { useEffect,useState,createContext} from 'react';
import {Routes, Route,useNavigate} from 'react-router-dom'


import LoginForm from './LoginForm';
import Landing from './Landing';
import Logout from './Logout';
import AllPostsPage from './AllPostsPage';
import ProfilePage from './ProfilePage';
import NavBar from './NavBar';
import CreateNewPostForm from './CreateNewPostForm';
import EditPostForm from './EditPostForm';
import SignUpForm from './SignUpForm';





export const UserContext = createContext();

function App() {

  const navigate = useNavigate()
  
  const [posts,setPosts] =useState([])
  const [user,setUser] = useState("")
  const [postToEdit, setPostToEdit] = useState(null)
  const [signedIn, setSignedIn] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState("")



  useEffect(()=> {
    fetch("/check_session").then((resp) => {
      if (resp.ok){
        resp.json().then((user) =>setUser(user))
      }
    });
  },[]);

  useEffect(() =>{
    fetch('/all_posts')
    .then((response) => response.json())
    .then((posts) => setPosts(posts));
  },[])
  

  const addPost = (post) => {
    setPosts(posts => [post, ...posts])
  }
  
  
  const handleEdit = (posts) => {
    setPostToEdit(posts)
    navigate(`/posts/${posts.id}/edit`)

  }
 
  
  const updatePost = (postToEdit) => {
    setPosts(posts => posts.map((post)=>{
      if (post.id === postToEdit.id){
        return postToEdit
      }else{
        return post
      }

    }))
  }

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  // function handleSearch(e){
  //   e.preventDefault()
  //   if(searchTerm!==undefined){
  //     console.log(e.target.searchTerm.value)
  //   }
    

  // }
   
  function handleSearch(e) {
      e.preventDefault()
     
      setSearchTerm(e.target.searchTerm.value)
  }
 

  


  return (
    <div className="">
      <div className = 'flex'>
      
        <UserContext.Provider value = {[user ,signedIn, setSignedIn]}>
          <NavBar user ={user} posts = {posts} handleSearch = {handleSearch}/>
          <Logout setUser = {setUser}/>
        </UserContext.Provider>
        
      </div>     

      <Routes>
        
        <Route path = '/' element = {<Landing />} />
      
        <Route
          exact path = '/login'
          element = {<LoginForm setUser = {setUser} user = {user}/>}
        />

        <Route
          exact path = '/users/new'
          element = {<SignUpForm />}
        
        />
        <Route
          exact path = '/all_posts'
          element = {<AllPostsPage setPosts = {setPosts} user = {user} posts = {posts} setUser = {setUser} filteredPosts = {filteredPosts}/> }
        />
        
        <Route
          exact path = {`/user/:user`}
          element = {<ProfilePage user = {user} setUser = {setUser} handleEdit = {handleEdit} posts = {posts} setPosts ={setPosts} />}
        />
        
        <Route
          exact path = 'all_posts/new'
          element = {<CreateNewPostForm addPost = {addPost} />}
      
        />

        <Route
          exact path = '/posts/:post/edit'
          element = {<EditPostForm postToEdit = {postToEdit} updatePost = {updatePost} user = {user}/>}
        />

      </Routes>
      
      
      
      
    </div>
  );
}

export default App;


