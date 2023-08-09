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
        <div className = 'flex border my-3'>
            
            <form className = "w-1/4 m-5" onSubmit = {formik.handleSubmit}>
                <div className = ''>
                    <h1 className = 'my-3'>Share what you are cooking!</h1>
                    
                    <div>
                    <label>Recipe Name</label>
                    <input className="rounded border my3"
                        id = "title"
                        name ="title"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.title} 
                    
                    />
                    </div>
                    
                    <div className = 'my-3'>
                        <label >Ingredients and Instructions</label>
                        <textarea className="rounded border p-10 my-3"
                            id = "body"
                            name = "body"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.body}>
                        </textarea>
                        
                    </div>
                    
                    <div>
                        <label>Image(URL)</label>
                        <input className="rounded border "
                            id ="image"
                            name = "image"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.image}
                        />
                    </div>
                    
                    <div>
                        <label>Username</label>
                        <input className="rounded border "
                            id = "username"
                            name ="username"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.username} 
                        
                        />
                    </div>
                    <div>
                        <label>Category: Food or Drink?</label> 
                        <input className="rounded border "
                            id = "category"
                            name ="category"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.category} 
                        
                        />
                    </div>
                </div>
                <button className = ' bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-1.5 my-3 text-center ' type ="submit" >Submit</button>
            </form>
           
        </div>
    )

}

export default CreateNewPostForm;