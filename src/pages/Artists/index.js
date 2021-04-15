import React from 'react'
import { Albums, ArtistCard } from '../../components'
import { Header} from '../../layout'
import './style.css'


const Artists = () => {

    const artists = [{name: "Black Coffee", artistImg:"https://www.ravejungle.com/wp-content/uploads/2018/11/black-coffee.jpg"}, {name: "Birdy", artistImg:"https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Birdy_%28Birdy_album%29.png/220px-Birdy_%28Birdy_album%29.png"}, {name: "Sofiane Pamart", artistImg: "https://herbertmag.com/wp-content/uploads/2020/11/Sofiane-final-scaled.jpg"}, {name: "Ben Howard", artistImg:"https://www.nme.com/wp-content/uploads/2021/01/BEN-HOWARD-2021.jpg"}]

 return (

    <>
        <Header />
        <h1>Artists</h1> 
        {/* <p class="musictype">Classical and Hiphop</p>
        <p> Sofiane Pamart is a French pianist, based in Paris and originally from Hellemmes in the suburbs of Lille. He is known to the French public for breaking the elitist codes of classical piano. A gold medallist at the Conservatoire de Lille, he took a different track to the typical classical music path.</p>
        <Albums/> */}
        <div class="artists">
            {artists.map(artist => 
                <ArtistCard name={artist.name} artistImg={artist.artistImg}/>)}
        </div>
        
    </>
    )
}

export default Artists