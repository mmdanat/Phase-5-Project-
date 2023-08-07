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
            <h1>Create a post here </h1>
            <form onSubmit = {formik.handleSubmit}>
                <div>
                    <label>Recipe : Name </label>
                    <div>
                    <input
                        id = "title"
                        name ="title"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.title} 
                    
                    />
                    </div>
                    <label>Ingredients and Instructions</label>
                    <div>
                        <textarea
                            id = "body"
                            name = "body"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.body}>
                        </textarea>
                        
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
                    
                    <label>Category: Food or Drink?</label> 
                   
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