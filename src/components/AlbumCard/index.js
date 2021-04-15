import React from 'react';
import './style.css'

const AlbumCard = (props) => {

        return(
            <div className = "albumCard">
                 {props.album}
                 <p>Listen</p>
            </div>
        )

}
export default AlbumCard