import React from 'react';
import './player.css'

const Player = () => {
    return (
        <figure className='media_player'>
            {/* <figcaption>It's Lit</figcaption> */}
            <audio
                className='controls'
                controls
                src="https://mangomusic.s3.amazonaws.com/8bb9537262564d02a3e17ef341e33179.mp3">
                Your browser does not support the
            <code>audio</code> element.
            </audio>
        </figure>
    );
}

export default Player;
