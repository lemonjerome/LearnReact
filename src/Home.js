const Home = () => {
    const handleClick = () => {
        console.log("hello, ninjas!");
    }

    const handleClickAgain = (name, e) => {
        console.log("hello " + name);
        console.log(e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>CLick me</button>
            <button onClick={(e) => {handleClickAgain("mario", e)}}>CLick mme again</button>
        </div>
    );
}
 
export default Home;