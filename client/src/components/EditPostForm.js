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

    <div>
        <div>Edit Post</div>
        <div>
            <form onSubmit = {formik.handleSubmit}>
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

                <div>
                    <label>Instructions</label>
                    <input
                        id = "body"
                        name = "body"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.body} />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        id ="image"
                        name = "image"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.image} />
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
                    <button type = "submit">Edit Post</button>
                </div>

            </form>
        </div>

    </div>
   )

}

export default EditPostForm;