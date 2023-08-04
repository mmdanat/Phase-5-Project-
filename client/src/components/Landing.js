import { Link} from 'react-router-dom'
import NavBar from './NavBar';


function Landing() {

    return(
        <div>
        
            Hello!! Welcome to Eat Together here you can share photos and recipies and get ideas on what to eat for dinner 
            Sign or Sign up to start sharing !
            <Link to = '/login'><h1>Login</h1></Link>
            <Link to = '/users/new'><h1>Sign up</h1></Link>
        </div>
    )
}

export default Landing;