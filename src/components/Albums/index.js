import React from 'react'

import './style.css'
import {Like} from '..'

const Albums = () => {
    return ( 
        <table>
            <tr>
                <th>Album Name</th>
                <th>Release Date</th>
                <th>Cover Art</th>   
            </tr>
            <tr>
                <td>PLANET</td>
                <td>2020</td>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71fM5jniZVL._AC_SL1500_.jpg"></img><Like /></td>
            </tr>
            <tr>
                <td>Pleine Lune 2</td>
                <td>2019</td>
                <td><img src="https://img.discogs.com/C1HRqNyKf0zQqUQuzeBiSY5AfdQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14318428-1572124373-3271.jpeg.jpg"></img> <Like /></td>
            </tr>
            <tr>
                <td>Pleine Lune</td>
                <td>2018</td>
                <td><img src="https://img.discogs.com/Ow1JgvkHTBtK9k9BvTyu9VKOtJY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12987000-1545944889-6386.jpeg.jpg"></img> <Like /></td>
            </tr>
        </table>

    )
}

export default Albums