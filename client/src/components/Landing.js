import { Link} from 'react-router-dom'



function Landing() {

    return(
        <div className = "flex flex-col items-center justify-center px-6 py-20 pl-10 pr-10 mx-auto border-blac " >
            <div className='flex flex- rounded-lg shadow bg-red-300'  >
                <img className = "rounded-lg px-20 py-8" src = "https://media.istockphoto.com/id/1004108530/photo/hand-holding-smartphone-taking-photo-of-beautiful-food-mix-fresh-green-salad.webp?b=1&s=170667a&w=0&k=20&c=0ji92aDcphAAoKyuo5DYTNdMDbAT450aeC57wRY5Y0Q="/>
                   <div className = "rounded-lg pl-2 pr-2 pt-10 font-mono font-semibold text-xl ">Welcome to Eat Together a place where you can share photos & recipes of what you are eating !
                        <div className = "pt-32">     
                            <div className = "w-full bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center " ><Link to = '/login'><h1>Login</h1></Link></div>
                            <div className = "w-full bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center " ><Link to = '/users/new'><h1>Sign up</h1></Link></div>
                        </div>
                   </div>
            </div>
        </div>
    )
}

export default Landing;