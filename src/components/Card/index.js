import React from 'react'
import {Like} from '..'


const Card = (props) => {

    return(
    <div class="card">
        <h3>{props.album.name}</h3>
        <h4>{props.album.date}</h4>
        <img src={props.album.coverArt}/>
        <Like />
    
    </div>

    )
}


export default Card