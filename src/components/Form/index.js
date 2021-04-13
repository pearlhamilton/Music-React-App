import React, { useState } from 'react'; 

const Form = () => {

    const [ artistName, setartistName ] = useState("");
    const [artistNameInput, setArtistNameInput] = useState(""); 



    const handleFormSubmit = e => {
        e.preventDefault();
        setartistName(artistNameInput);
        setArtistNameInput("");
    };


    const handleInput = e => {
        setArtistNameInput(e.target.value)
    };



    return (
        <>
        <form role="form" onSubmit={handleFormSubmit}>
            <input type="text" id="artist-name" name="artist-name" placeholder="Enter your favourite artist name" value={artistNameInput} onChange={handleInput}/>
            <input type="submit" value="Update!"/>
        </form>
        <h2>{artistName? artistName : ""}</h2>
        </>
    )

}

export default Form; 