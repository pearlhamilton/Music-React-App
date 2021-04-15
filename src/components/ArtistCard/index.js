import React from 'react'
import './style.css'
import {Like} from '..'


const ArtistCard = (props) => {

    return(
        <div class="artistCard">
        <h2>{props.name}</h2>
        <img src={props.artistImg}/>
        <Like/>
        </div>
    )

}



export default ArtistCard