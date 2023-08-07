import { useEffect,useState,createContext,useContext} from 'react';
import { Routes, Route,useNavigate} from 'react-router-dom'


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
  // const UserContext = createContext()
  
 

  const [posts,setPosts] =useState([])
  const [user,setUser] = useState("")
  const [postToEdit, setPostToEdit] = useState(null)
  const [signedIn, setSignedIn] = useState(false)

  // console.log(user)

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
  // console.log(posts)
  

  const addPost = (post) => {
    setPosts(posts => [post, ...posts])
  }
  

  // const addUser = (new_user) => {
  //   setUser(user => [new_user,...user])
  // }

  const handleEdit = (posts) => {
    setPostToEdit(posts)
    navigate(`/posts/${posts.id}/edit`)

  }
 
  
  const updatePost = (postToEdit) => {
    setPosts(posts => posts.map((post)=>{
      if (post.id == postToEdit.id){
        return postToEdit
      }else{
        return post
      }

    }))
  }
  
  
  


  return (
    <div className="bg-color">
      <UserContext.Provider value = {[user ,signedIn, setSignedIn]}>
        <NavBar user ={user} />
        <Logout setUser = {setUser}/>
      </UserContext.Provider>
     

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
          element = {<AllPostsPage posts = {posts} setUser = {setUser}/> }
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
          element = {<EditPostForm postToEdit = {postToEdit} updatePost = {updatePost}/>}
        />

      </Routes>
      
      
      
      
    </div>
  );
}

export default App;


