import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom'


function SignUpForm({addUser}){
   
    const navigate =useNavigate()

    const formik = useFormik({
        initialValues: {
          first_name: '',
          last_name: '',
          email_address: '',
          username:'',
          password:'',
        },
        onSubmit: values => {
            fetch("/users",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(values)
            })
                .then(resp => {
                    if (resp.ok) {
                        resp.json().then(
                            navigate('/login')
                         )
                    }
                    else{
                        navigate('/users/new')
                    }
                })
                   
                
        }
    }); 

    return (
        <div className = "flex flex-col items-center justify-center px-6 py-8 mx-auto border-black">
            <div className = "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                <div className ="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="font-bold text-gray-900 md:text-2xl "><h1>Signup</h1></div>
                        <form className = "space-y-4 md:space-y-6"  onSubmit = {formik.handleSubmit}>
                            
                                
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">First Name</label>
                                    <input className = "bg-gray-50 border border-gray-300 text-zinc-500 dark:placeholder:text-neutral-200 sm:text-sm rounded-md block w-full h-8"
                                        id = "first_name"
                                        name ="first_name"
                                        type = "text"
                                        onChange = {formik.handleChange}
                                        value = {formik.values.first_name} 
                                    
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Last Name</label>
                                    <input  className = "bg-gray-50 border border-gray-300 text-zinc-500 dark:placeholder:text-neutral-200 sm:text-sm rounded-md block w-full h-8"
                                        id = "last_name"
                                        name = "last_name"
                                        type = "text"
                                        onChange = {formik.handleChange}
                                        value = {formik.values.last_name}
                                    
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Email Address</label>
                                    <input  className = "bg-gray-50 border border-gray-300 text-zinc-500 dark:placeholder:text-neutral-200 sm:text-sm rounded-md block w-full h-8"
                                        id ="email_address"
                                        name = "email_address"
                                        type = "text"
                                        onChange = {formik.handleChange}
                                        value = {formik.values.email_address}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Username</label>
                                    <input  className = "bg-gray-50 border border-gray-300 text-zinc-500 dark:placeholder:text-neutral-200 sm:text-sm rounded-md block w-full h-8"
                                        id = "username"
                                        name ="username"
                                        type = "text"
                                        onChange = {formik.handleChange}
                                        value = {formik.values.username} 
                                    
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Password</label> 
                                    <input  className = "bg-gray-50 border border-gray-300 text-zinc-500 dark:placeholder:text-neutral-200 sm:text-sm rounded-md block w-full h-8"
                                        id = "password"
                                        name ="password"
                                        type = "text"
                                        onChange = {formik.handleChange}
                                        value = {formik.values.password} 
                                    
                                    />
                                </div>
                            
                            <button className = "w-full bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center " type ="submit" >Submit</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                Return to 
                                <a href = "/login" className="font-medium text-red-500 hover:underline"> Sign In?</a>
                            </p>
                            
                        </form>
                    </div>
                </div>
        </div>
    )

}

   


export default SignUpForm;