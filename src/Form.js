import React, { useState } from 'react'; 

const Form = () => {

    const [artistNameInput, setArtistNameInput] = useState(""); 

    const handleInput = e => {
        setArtistNameInput(e.target.value)
    };

    return (
        <form role="form">
            <input type="text" id="artist-name" name="artist-name" placeholder="Enter your favourite artist name" value={artistNameInput} onChange={handleInput}/>
            <input type="submit" value="Update!"/>
        </form>
    )
}

export default Form; 