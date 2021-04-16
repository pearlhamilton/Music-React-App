import React from 'react'
import { NavLink } from 'react-router-dom'
import { BackButton } from '../../components'
import './style.css'


const Nav = () => {
    return(
        <nav>
            <NavLink exact to ="/" activeClassName="active">Home</NavLink>
            <NavLink to ="/artists" activeClassName="active">Artists</NavLink>
            <NavLink to ="/reviews" activeClassName="active">Reviews</NavLink>
        </nav>
    )
}


export default Nav