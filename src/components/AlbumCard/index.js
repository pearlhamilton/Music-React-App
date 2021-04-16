import React from 'react';
import './style.css'

const AlbumCard = (props) => {
    console.log(props.album[1])

        return(
            <div className = "albumCard">
                 {props.album[0]}
                 <p>Listen</p>
                 <a href={props.album[1]}>
                 <img className= "spotify"src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"></img>
                </a>
            </div>
        )

}
export default AlbumCard