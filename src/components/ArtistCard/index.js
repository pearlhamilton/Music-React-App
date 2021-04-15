import React, {useEffect, useState} from 'react'
import './style.css'
import {Like, Albums} from '..'


const ArtistCard = (props) => {
    const albums = [['Come and Take it all', 'Crossing the threshold', 'The free-the will'], 
                    ['Birdy','Young Heart','Beautiful Lies'], ['PlEINE LUNE', 'PLEINE LUNE 2'], ['I forget where we were', 'Noonday Dream']
                ]

    const[moreInfo, setmoreInfo] = useState(false)

    function showmore(){
        setmoreInfo(!moreInfo)
}

    if (moreInfo){
   


    return(
        <div className="artistCard">
        <h5 onClick={() => showmore()}>{props.name}</h5>
        <img src={props.artistImg}/>
        <p>{props.id}</p>
        <Like/>
        <Albums albums ={albums[(props.id)-1]}/>
        </div>
    )
    }
    else{
        return(
        <div className="artistCard">
        <h5 onClick={() => showmore()}>{props.name}</h5>
        <img src={props.artistImg}/>
        <p>{props.id}</p>
        <Like/>

        </div>

        )
    }
        
    
}



export default ArtistCard