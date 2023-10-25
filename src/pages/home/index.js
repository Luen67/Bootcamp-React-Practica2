import React, {useState} from "react";

import "./home.scss";

const Home = () => {
    const [isDarkTheme, setIsDartkTeme] = useState(false);

    const toggleTheme = () => {
        setIsDartkTeme(!isDarkTheme);
    }

    return (
        <div className={`home ${isDarkTheme ? 'dark-theme' : 'light:theme'}`}>            
            <div className="">
                <h1>Home</h1>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
        </div>
    );
};

export default Home;