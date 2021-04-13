import React from 'react'
import {Like} from '..'
import './style.css'


const Card = (props) => {

    return(
    <div class="card">
        <h3>{props.album.name}</h3>
        <h4>{props.album.date}</h4>
        <img src={props.album.coverArt}/>
        <br></br>
        <Like />
    
    </div>

    )
}


export default Card