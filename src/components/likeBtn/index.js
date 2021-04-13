import React, { useState } from 'react'; 

const likeBtn = () => {
    const [like, setLike] = useState(false); 

    const handleLike = e => {  
        setLike(prevState => !prevState)
    }


    return (
        <button onClick={handleLike}>{ like ? "Unlike" : "Like"}</button>
    )
};

export default likeBtn;

