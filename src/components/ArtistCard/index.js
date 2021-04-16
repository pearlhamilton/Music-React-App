import React, {useEffect, useState} from 'react'
import './style.css'
import {Like, Albums} from '..'


const ArtistCard = (props) => {
  

    const[moreInfo, setmoreInfo] = useState(false)

    function showmore(){
        setmoreInfo(!moreInfo)
}

    if (moreInfo){
   
    return(
        <div className="artistCard">
            <div className="artist">
        <h2 onClick={showmore}>{props.name}</h2>
        <img src={props.artistImg}/>
        <Like/>
        <Albums albums ={props.albums}/>
        </div>
        </div>
    )
    }
    else{
        return(
        <div className="artistCard">
            <div className="artist">
                <h2 onClick={showmore}>{props.name}</h2>
                <img src={props.artistImg}/>
                <Like/>
            </div>
        </div>

        )
    }
        
    
}



export default ArtistCard