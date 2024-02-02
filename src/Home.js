import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {fetch('http://localhost:8000/blogss')
        .then((res) => {
            if (!res.ok){
                throw Error('could not fetch');
            }
            return res.json();
        })
        .then ((data) => {
            setBlogs(data);
            setIsPending(false);
            setError(null)
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })
    }, 3000)
    }, []);




    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs"></BlogList>}
        </div>
    );
}
 
export default Home;