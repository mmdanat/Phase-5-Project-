import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom'

function CreateNewPostForm({addPost}){
    const navigate =useNavigate()

    const formik = useFormik({
        initialValues: {
          title: '',
          body: '',
          image: '',
          username:'',
          category:'',
        },
        onSubmit: values => {
            fetch("/all_posts",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(values)
            })
                .then(resp => resp.json())
                .then((post) =>{
               
                    addPost(post)
                    navigate('/all_posts')
                })
        }
    }); 

    return (
        <>
            <h1>Hello Create a post here </h1>
            <form onSubmit = {formik.handleSubmit}>
                <div>
                    <label>Recipie : Name and Ingredients</label>
                    <div>
                    <input
                        id = "title"
                        name ="title"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.title} 
                    
                    />
                    </div>
                    <label>Instructions</label>
                    <div>
                    <input
                        id = "body"
                        name = "body"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.body}
                    
                    />
                    </div>
                    <label>Image</label>
                    <div>
                    <input
                        id ="image"
                        name = "image"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.image}
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
                    <label>Category</label> 
                    <input
                        id = "category"
                        name ="category"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.category} 
                    
                    />
                </div>
                <button type ="submit" >Submit</button>
            </form>
           
        </>
    )

}

export default CreateNewPostForm;