

import { useEffect} from 'react';
// import { Routes, Route } from 'react-router-dom'

function App() {

  useEffect(() =>{
    fetch('/all_posts')
    .then((response) => response.json())
    .then((posts) => console.log(posts));
  },[])


  function handleLogin(e){
    e.preventDefault()

    let username = e.target.username.value;
    
  }
  
  

  return (
    <div className="App">
      <h1 className = 'text-bue'>Here are the Posts</h1>
      
    </div>
  );
}

export default App;
