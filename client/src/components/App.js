import { useEffect,useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import LoginForm from './LoginForm';
import AllPostsCards from './AllPostsCards';
import Logout from './Logout';




function App() {

  const [user,setUser] = useState("")

  useEffect(()=> {
    fetch("/check_session").then((resp) => {
      if (resp.ok){
        resp.json().then((user) =>setUser(user))
      }
    });
  },[]);
  
  function handleLogin(e){
    e.preventDefault()

    let username = e.target.username.value;

    fetch('/login',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({username}),
    })
      .then((resp) =>{
        if (resp.ok) {
          resp.json().then((user) =>setUser(user));
        }
      })
  }

  console.log(user)



  
  useEffect(() =>{
    fetch('/all_posts')
    .then((response) => response.json())
    .then((posts) => console.log(posts));
  },[])

  

  return (
    <div className="App">
      <Routes>
        <Route
          exact path = '/login'
          element = {<LoginForm handleLogin = {handleLogin}/>}
        />

        {/* <Route 
          exact path = '/'
          elemet = {<HomePage user = {user}/>}
        /> */}

        <Route
          exact path = '/all_posts'
          element = {<AllPostsCards/>}
        
        />

      </Routes>

      <Logout setUser = {setUser}/>
      
      
    </div>
  );
}

export default App;
