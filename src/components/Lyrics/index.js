import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const Lyrics = () => {
    const [lyrics, setLyrics] = useState();

    function randomSong () {

        const songs = [{artist: "ABBA", song: "Angeleyes"}, {artist: "ABBA", song: "Waterloo"}, {artist: "ABBA", song: "Fernando"}, {artist: "Coldplay", song: "Yellow"}]
        
        let randomIndex = Math.floor(Math.random() * songs.length);
        console.log(randomIndex)
        let song = songs[randomIndex];
        return `${song.artist}/${song.song}`
    }

    // useEffect( () => {
    //     async function getLyrics(){
    //         try{
    //             let query = randomSong();
    //             let { data } = await axios.get(`https://api.lyrics.ovh/v1/${query}`);
    //             setLyrics(data);
    
    //         } catch (err){
                
    //             setLyrics({lyrics: `Cannot fetch  lyrics! ${err}`})
    //         }
    //     }
    //     // getLyrics();

    //     const interval = setInterval(getLyrics, 3000);

    //     // return () => clearInterval(interval)
    // },[])

  

    return (
        <div id="lyrics-div">
            <h4>A song guesser game is coming soon!</h4>
            {lyrics &&
            <p>{ lyrics.lyrics }</p> }
        </div>
    )
}

export default Lyrics;