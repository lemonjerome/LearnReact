import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useNavigate } from "react-router";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate()

    const handleClick = (e) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method : 'DELETE',            
        }).then(
            navigate('/')
        )
    }

    return (
    <div className="blog-details">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <div>Written by {blog.author}</div>
                <div>{blog.body}</div>
                <button onClick = {handleClick}>Delete</button>
            </article>
        )}
    </div> 
    );
}
 
export default BlogDetails;