

function LoginForm({handleLogin}){


    return (
        <div className = "flex flex-col items-center justify-center px-6 py-8 mx-auto border-black">
            <a className = 'flex items-center mb-6 text-2xl text-grey-900 border-solid'>
                <img className = "w-10 h-8 mr-2"src = 'https://media.istockphoto.com/id/1137640747/vector/yummy-smile-vector-eating-emoji-face-icon.jpg?s=612x612&w=0&k=20&c=maEPAROCGT2W0wIZ9GmUk3dKDJIrFCxxehOntgUfVTs=' />
                Eat Together
            </a>
            <div className = "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700" >
                <div className ="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-l font-bold text-gray-900 md:text-2xl">
                        Sign into your account
                    </h1>
           
                    <form onSubmit = {handleLogin} className = "space-y-4 md:space-y-6" >
                        
                        <label className="block mb-2 text-sm font-medium ">Username</label>
                        <input id = "username" type = "text" required placeholder = "ex: space_master77"className = "bg-gray-50 border border-gray-300 text-zinc-300 sm:text-sm rounded-md block w-full h-6"/>
                        
                        <label className="block mb-2 text-sm font-medium ">Password</label>
                        <input id = "password" type = "text" placeholder = "••••••••" className = "bg-gray-50 border border-gray-300 text-zinc-300 sm:text-sm rounded-md block w-full h-6"/>
                        

                        <button className = "w-full bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center " type = "submit">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Dont have an account yet? <a href = "" className="font-medium text-red-500 hover:underline">Sign up</a>
                        </p>
                    </form>

                </div>
                
            </div>
        </div>


    )
        

}

export default LoginForm;