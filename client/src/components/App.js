import { useEffect,useState} from 'react';
import { Routes, Route,useNavigate} from 'react-router-dom'


import LoginForm from './LoginForm';
import Landing from './Landing';
import Logout from './Logout';
import PostsPage from './PostsPage';
import ProfilePage from './ProfilePage';
import NavBar from './NavBar';
import CreateNewPostForm from './CreateNewPostForm';
import EditPostForm from './EditPostForm';




function App() {

  const [posts,setPosts] =useState([])
  const [user,setUser] = useState("")
  // console.log(user)

  // useEffect(()=> {
  //   fetch("/check_session").then((resp) => {
  //     if (resp.ok){
  //       resp.json().then((user) =>setUser(user))
  //     }
  //   });
  // },[]);
  useEffect(() =>{
    fetch('/all_posts')
    .then((response) => response.json())
    .then((posts) => setPosts(posts));
  },[])

  const addPost = (post) => {
    setPosts(posts => [...posts,post])
  }
  
  
  


  return (
    <div className="App">
      <NavBar user = {user}/>
      <Logout setUser = {setUser}/>

      <Routes>
        
        <Route path = '/' element = {<Landing />} />
      
        <Route
          exact path = '/login'
          element = {<LoginForm setUser = {setUser} user = {user}/>}
        />
        <Route
          exact path = '/all_posts'
          element = {<PostsPage posts = {posts} setUser = {setUser}/> }
        />

        <Route
          exact path = {`/user/:user`}
          element = {<ProfilePage user = {user} setUser = {setUser} />}
        />


        <Route
          exact path = 'all_posts/new'
          element = {<CreateNewPostForm addPost = {addPost} />}
      
        />

        <Route
          exact path = '/posts/:post/edit'
          element = {<EditPostForm/>}
        />


    

      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
