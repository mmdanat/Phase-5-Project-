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
        <>
            <h1>Signup Here </h1>
            <form onSubmit = {formik.handleSubmit}>
                <div>
                    <label>First Name</label>
                    <div>
                    <input
                        id = "first_name"
                        name ="first_name"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.first_name} 
                    
                    />
                    </div>
                    <label>Last Name</label>
                    <div>
                    <input
                        id = "last_name"
                        name = "last_name"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.last_name}
                    
                    />
                    </div>
                    <label>Email Address</label>
                    <div>
                    <input
                        id ="email_address"
                        name = "email_address"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.email_address}
                    />
                    </div>
                    <label>Username</label>
                    <div>
                    <input
                        id = "username"
                        name ="username"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.username} 
                    
                    />
                    </div>
                    {/* want to make this a drop down category  */}
                    <label>Password</label> 
                    <input
                        id = "password"
                        name ="password"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.password} 
                    
                    />
                </div>
                <button type ="submit" >Submit</button>
            </form>
           
        </>
    )

}

   


export default SignUpForm;