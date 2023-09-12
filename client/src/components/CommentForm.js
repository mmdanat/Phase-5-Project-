import { useFormik, Form } from 'formik';
import { useNavigate} from 'react-router-dom'

function CommentForm({setComments, comments,postId}){


    const navigate =useNavigate()
    

    const formik = useFormik({
        initialValues: {
          text: '',
        },
        onSubmit: (values, actions) => {
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
                    actions.resetForm({
                        values:{
                            text:"",
                        }
                    })
                    
                })
        }
    }); 



    return(
        <div className = 'tracking-widest text-sm title-font font-medium'>
            <form onSubmit = {formik.handleSubmit}>
                
                    <div>
                        <div className = "my-2"><label >Add Comment</label></div>
                        <textarea className="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[1.6] transition-all ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id = "text"
                            name = "text"
                            type = "text"
                            onChange = {formik.handleChange}
                            value = {formik.values.text}>
                        </textarea>
                    </div>
                    <button className = ' bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-1.5 my-3 text-center ' type = "submit">Submit</button>

            </form>
        </div>
    )
}

export default CommentForm;