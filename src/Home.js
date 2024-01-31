import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');

    const handleClick = () => {

        if (name == 'mario'){
            setName('luigi');
        } else{
            setName('mario');
        }
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>CLick me</button>
        </div>
    );
}
 
export default Home;