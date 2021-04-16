
import React from 'react'
import { Lyrics,BackButton } from '../../components'
import { Nav } from '../../layout'
import './style.css'


const Home = () => {

    return(
        <main>
        
            <h1>ZenMode</h1>
            <Nav />
            <h3>Explore our app and discover artists to enter the zen!</h3>
            <p id="lovemusic">If you love music, try to guess the artist and song from the lyrics below:</p>
            <Lyrics />
            <BackButton/>
        </main>

    )
}



export default Home