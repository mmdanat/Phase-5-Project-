import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { useParams } from "react-router-dom";

function EditPostForm(){
    const [postToEdit, setPostToEdit] = useState(null)
    const {post}= useParams();
    
    useEffect(() => {
        fetch(`/posts/${post}`)
        .then((resp) => resp.json())
        .then((data) => setPostToEdit(data))

    },[])

    // function handlePostEdit(e){
    //     e.preventDefault()
    //    const navigate =useNavigate()

        const formik = useFormik({
            initialValues: {
            title: '',
            body: '',
            image: '',
            
            },
            onSubmit: values => {
                fetch(`/posts/${post}`,{
                    method:"PATCH",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(values)
                })
                    .then(resp => resp.json())
                    .then()
            }
        }); 

    //  }
    
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
                        value = {formik.values.postToEdit} 
                    />
                </div>

                <div>
                    <label>Instructions</label>
                    <input
                        id = "body"
                        name = "body"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.postToEdit} />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        id ="image"
                        name = "image"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.postToEdit} />
                </div>
                {/* <div>
                    <label>Category</label>
                    <input
                        id ="category"
                        name = "category"
                        type = "text"
                        onChange = {formik.handleChange}
                        value = {formik.values.postToEdit} />
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