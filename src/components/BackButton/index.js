import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

const BackButton = () => {
    const history = useHistory()

    return ( 

        <button onClick={history.goBack}>Back</button>
    )
}


export default BackButton