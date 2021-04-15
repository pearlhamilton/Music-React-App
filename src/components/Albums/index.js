import React, { useState } from 'react';
import './style.css'
import {AlbumCard} from '..'

const Albums = (props) => {

    
    let album = props.albums
    console.log(album)
    // const [album, setalbum] = useState([
    // {name: "PLANET", date: "2020", coverArt: "https://images-na.ssl-images-amazon.com/images/I/71fM5jniZVL._AC_SL1500_.jpg"},
    // {name: "PLEINE LUNE", date: "2019", coverArt: "https://img.discogs.com/C1HRqNyKf0zQqUQuzeBiSY5AfdQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14318428-1572124373-3271.jpeg.jpg"},
    // {name: "PLEINE LUNE 2", date: "2018", coverArt: "https://img.discogs.com/Ow1JgvkHTBtK9k9BvTyu9VKOtJY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12987000-1545944889-6386.jpeg.jpg"} 
    // ])

    const albumCards = [];
        for (let i = 0; i< album.length; i++){
            let temp = <AlbumCard key={`album-${i}`} album = {album[i]}/> 
            console.log(temp)
            albumCards.push(temp)
        
            
        }

        return(
            <div className="card-div">

                {albumCards}

                I am a card



            </div>
        )
        // <table>
        //     <tr>
        //         <th>Album Name</th>
        //         <th>Release Date</th>
        //         <th>Cover Art</th>   
        //     </tr>
        //     <tr>
        //         <td>PLANET</td>
        //         <td>2020</td>
        //         <td><img src="https://images-na.ssl-images-amazon.com/images/I/71fM5jniZVL._AC_SL1500_.jpg"></img><Like /></td>
        //     </tr>
        //     <tr>
        //         <td>Pleine Lune 2</td>
        //         <td>2019</td>
        //         <td><img src="https://img.discogs.com/C1HRqNyKf0zQqUQuzeBiSY5AfdQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14318428-1572124373-3271.jpeg.jpg"></img> <Like /></td>
        //     </tr>
        //     <tr>
        //         <td>Pleine Lune</td>
        //         <td>2018</td>
        //         <td><img src="https://img.discogs.com/Ow1JgvkHTBtK9k9BvTyu9VKOtJY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12987000-1545944889-6386.jpeg.jpg"></img> <Like /></td>
        //     </tr>
        // </table>

        

    
}

export default Albums