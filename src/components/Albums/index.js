import React, { useState } from 'react';
import './style.css'
import {Like, Card} from '..'

const Albums = () => {

    const [album, setalbum] = useState([
    {name: "PLANET", date: "2020", coverArt: "https://images-na.ssl-images-amazon.com/images/I/71fM5jniZVL._AC_SL1500_.jpg"},
    {name: "PLEINE LUNE", date: "2019", coverArt: "https://img.discogs.com/C1HRqNyKf0zQqUQuzeBiSY5AfdQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14318428-1572124373-3271.jpeg.jpg"},
    {name: "PLEINE LUNE 2", date: "2018", coverArt: "https://img.discogs.com/Ow1JgvkHTBtK9k9BvTyu9VKOtJY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12987000-1545944889-6386.jpeg.jpg"} 
    ])

    const albumCards = [];
        for (let i = 0; i< album.length; i++){
            let temp = <Card key={`album-${i}`} album = {album[i]}/> 
            albumCards.push(temp)
        
            
        }

        return(
            <div class="card-div">

                {albumCards}



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