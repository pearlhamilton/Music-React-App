import React from 'react'
import { Albums, ArtistCard} from '../../components'
import { Header} from '../../layout'
import './style.css'


const Artists = () => {

    const artists = [{ id: 1, name: "Black Coffee", artistImg:"https://www.ravejungle.com/wp-content/uploads/2018/11/black-coffee.jpg", Albums: ['Come and Take it all', 'Crossing the threshold', 'The free-the will']}, 
    {id:2, name: "Birdy", artistImg:"https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Birdy_%28Birdy_album%29.png/220px-Birdy_%28Birdy_album%29.png", Albums: ['Birdy','Young Heart','Beautiful Lies']}, 
    {id: 3, name: "Sofiane Pamart", artistImg: "https://herbertmag.com/wp-content/uploads/2020/11/Sofiane-final-scaled.jpg", Albums: ['PlEINE LUNE', 'PLEINE LUNE 2']},
     {id:4, name: "Ben Howard", artistImg:"https://www.nme.com/wp-content/uploads/2021/01/BEN-HOWARD-2021.jpg", Albums: ['I forget where we were', 'Noonday Dream']},
    {id:5, name: 'test'}]

 return (

    <>
        <Header />
        <h1>Artists</h1> 
        {/* <p class="musictype">Classical and Hiphop</p>
        <p> Sofiane Pamart is a French pianist, based in Paris and originally from Hellemmes in the suburbs of Lille. He is known to the French public for breaking the elitist codes of classical piano. A gold medallist at the Conservatoire de Lille, he took a different track to the typical classical music path.</p>
        <Albums/> */}
        <p>Click on the artist name to see and play their albums</p>

        <div className="artists">
            {artists.map(artist => 
                <ArtistCard key={ artist.id} id = {artist.id} name={artist.name} artistImg={artist.artistImg} albums ={artist.Albums}/>)}
                {/* I could wite <ArtistCard {...artist}/>*/}
        </div>

     
        
    </>
    )
}

export default Artists