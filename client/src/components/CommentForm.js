import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom'

function CommentForm({setComments, comments,postId}){


    const navigate =useNavigate()

    const formik = useFormik({
        initialValues: {
          text: '',
        },
        onSubmit: values => {
            fetch("/all_comments",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    ...values, 
                    post_id:postId

                })
            })
                .then(resp => resp.json())
                .then((comment) =>{
                    
                    setComments([...comments,comment])
                    
                    
                })
        }
    }); 



    return(
        <div className = 'tracking-widest text-sm title-font font-medium'>
            <form onSubmit = {formik.handleSubmit}>
                <label >Add Comment</label>
                    <div>
                        <input
                            id = "text"
                            name ="text"
                            type = "text" 
                            onChange = {formik.handleChange}
                            value = {formik.values.text} 
                        />
                    </div>
                    <button type = "submit">Submit</button>

            </form>
        </div>
    )
}

export default CommentForm;