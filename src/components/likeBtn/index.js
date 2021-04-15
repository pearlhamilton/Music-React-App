import React, { useState } from 'react'; 
import './style.css'

const likeBtn = () => {
    const [like, setLike] = useState(true); 

    const handleLike = e => {  
        setLike(prevState => !prevState)
        console.log(like)
        if(like){
            e.target.setAttribute("class", "liked")
        } else {
            e.target.removeAttribute("class");
        }
        
        
    }


    return (
        <p onClick={handleLike}>&#10084;</p>

    )
};

export default likeBtn;

