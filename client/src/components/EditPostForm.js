import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { useParams,useNavigate } from "react-router-dom";

function EditPostForm({postToEdit,updatePost}){
    // const [postToEdit, setPostToEdit] = useState(null)
    const {post}= useParams();
    const navigate =useNavigate()
    

    

    console.log(post)
    const formik = useFormik({
        initialValues: {
        title: postToEdit.title,
        body: postToEdit.body,
        image: postToEdit.image,

        
        },
        onSubmit: values => {
            fetch(`/posts/${post}`,{
                method:"PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(values)
            })
            .then(resp =>{
                if (resp.ok) {
                    resp.json().then(post =>{
                        updatePost(post)
                        navigate('/all_posts')
                    })
                }

            })
            
                
        }
    }); 
    

    
    
   return(

    <div className = 'flex w-5/6 h-80 justify-center ml-auto mr-auto  bg-white rounded-lg shadow dark:border dark:border-gray-700'>
        
        <div >
            <form onSubmit = {formik.handleSubmit}>
                
                <div className = 'flex flex-col'>
                <div className = 'my-3'>Edit Post</div>
                    
                    <div>
                        <label>Image</label>
                        <input className="rounded border ml-2 my-3"
                            id ="image"
                            name = "image"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.image} />
                    </div>
                
                    
                    <div>
                        <label>Recipe Name</label>
                        <input className="rounded border ml-2 my-3"
                            id = "title"
                            name ="title"
                            type = "text" 
                            onChange = {formik.handleChange}
                            value = {formik.values.title} 
                        />
                    </div>

                    <div>
                        <label>Ingredients and Instructions</label>
                        <textarea className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id = "body"
                            name = "body"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.body}>
                        </textarea>
                    </div>
                    
                    {/* <div>
                        <label>Category</label>
                        <input
                            id ="category"
                            name = "category"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.category_type} />
                    </div> */}
                    <div>
                        <button className = ' bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-1.5 my-3 text-center ' type = "submit">Edit Post</button>
                        
                    </div>
                </div>
            </form>
        </div>

    </div>
   )

}

export default EditPostForm;