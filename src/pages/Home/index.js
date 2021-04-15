
import React from 'react'
import { Lyrics,BackButton } from '../../components'
import { Nav } from '../../layout'
import './style.css'


const Home = () => {

    return(
        <main>
            <BackButton/>
            <h1>ZenMode</h1>
            <h2>made with React</h2>
            <Nav />
            <h3>Explore our app and discover artists to enter the zen!</h3>
            <p>If you love music, try to guess the artist and song from the lyrics below:</p>
            <Lyrics />
        </main>

    )
}



export default Home