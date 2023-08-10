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
        <div className = 'flex w-5/6 justify-center ml-auto mr-auto  bg-white rounded-lg shadow dark:border dark:border-gray-700'>
            
            <form className = " " onSubmit = {formik.handleSubmit}>
                <div className = 'flex flex-col'>
                    <h1 className = 'my-3'>Share what you are cooking!</h1>
                    

                    <div>
                        <label>Username</label>
                        <input className="rounded border ml-2 my-3"
                            id = "username"
                            name ="username"
                            type = "text"
                            placeholder="ex: TimmyBBones77" 
                            onChange = {formik.handleChange}
                            value = {formik.values.username} 
                        
                        />
                    </div>

                    <div>
                        <label>Image(URL)</label>
                        <input className="rounded border ml-2 my-3 "
                            id ="image"
                            name = "image"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.image}
                        />
                    </div>

                    <div>
                        <label>Recipe Name</label>
                        <input className="rounded border my-3 ml-2"
                            id = "title"
                            name ="title"
                            type = "text"
                            placeholder="ex: Blueberry Pie" 
                            onChange = {formik.handleChange}
                            value = {formik.values.title} 
                        
                        />
                    </div>
                    
                    
                    
                    <div>
                        <label>Category </label>
                        <input className="rounded border my-3 ml-2 "
                            id = "category"
                            name ="category"
                            type = "text"
                            placeholder="food or drink?" 
                            onChange = {formik.handleChange}
                            value = {formik.values.category} 
                        
                        />
                    </div>
                    
                    <div>
                        <label >Ingredients and Instructions</label>
                        <textarea className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id = "body"
                            name = "body"
                            type = "body"
                            onChange = {formik.handleChange}
                            value = {formik.values.body}>
                        </textarea>
                        
                    </div>
                    
                
                </div>
                <button className = ' bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-1.5 my-3 text-center ' type ="submit" >Submit</button>
            </form>
           
        </div>
    )

}

export default CreateNewPostForm;