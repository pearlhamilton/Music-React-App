import React from 'react'
import { Albums, ArtistCard, BackButton} from '../../components'
import { Header} from '../../layout'
import './style.css'


const Artists = () => {

    const artists = [{ id: 1, name: "Black Coffee", artistImg:"https://www.ravejungle.com/wp-content/uploads/2018/11/black-coffee.jpg", Albums: [['Come and Take it all',"https://open.spotify.com/album/2KQI8ShtdFwYYyoS0oJjwr"], ['Crossing the threshold', 'https://open.spotify.com/album/1ekdOqSHjU2K7KHVog95eA'], ['The free-the will', 'https://open.spotify.com/album/2iT9zaPphhKrm30PRW4gju']]}, 
    {id:2, name: "Birdy", artistImg:"https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Birdy_%28Birdy_album%29.png/220px-Birdy_%28Birdy_album%29.png", Albums: [['Birdy', 'https://open.spotify.com/album/1UVggFtdVPqHy5WamYFu6w'],['Young Heart', 'https://open.spotify.com/playlist/0cAfhUGO9nbcFAaSKNxJtC'],['Beautiful Lies','https://open.spotify.com/album/1UVggFtdVPqHy5WamYFu6w']]}, 
    {id: 3, name: "Sofiane Pamart", artistImg: "https://herbertmag.com/wp-content/uploads/2020/11/Sofiane-final-scaled.jpg", Albums: [['PlEINE LUNE','https://open.spotify.com/album/2jJ0Ny2RfUqUxnooZXKGBx'], ['PLEINE LUNE 2','https://open.spotify.com/album/7czGltiOKNLrc87vUuc6g2']]},
    {id:4, name: "Ben Howard", artistImg:"https://www.nme.com/wp-content/uploads/2021/01/BEN-HOWARD-2021.jpg", Albums: [['I forget where we were','https://open.spotify.com/album/4WI3oFEsDiHU3I5xHz88sF'], ['Noonday Dream','https://open.spotify.com/album/6astw05cTiXEc2OvyByaPs']]}]
   

 return (

    <>
        <Header />
        <h1 id="ArtistHeader">Artists</h1> 
        {/* <p class="musictype">Classical and Hiphop</p>
        <p> Sofiane Pamart is a French pianist, based in Paris and originally from Hellemmes in the suburbs of Lille. He is known to the French public for breaking the elitist codes of classical piano. A gold medallist at the Conservatoire de Lille, he took a different track to the typical classical music path.</p>
        <Albums/> */}
        <p>Click on the artist name to see and play their albums</p>

        <div className="artists">
            {artists.map(artist => 
                <ArtistCard key={ artist.id} id = {artist.id} name={artist.name} artistImg={artist.artistImg} albums ={artist.Albums}/>)}
                {/* I could wite <ArtistCard {...artist}/>*/}
        </div>
        <div className="buttonContainer">
        <BackButton />
        </div>

     
        
    </>
    )
}

export default Artists