import React from 'react';
import './player.css'

const Player = () => {
    return (
        <figure className='media_player'>
            {/* <figcaption>It's Lit</figcaption> */}
            <audio
                className='controls'
                controls
                src="https://mangomusic.s3.amazonaws.com/1685a43a9d124437bb6bb7fd104af21b.mp3">
                Your browser does not support the
            <code>audio</code> element.
            </audio>
        </figure>
    );
}

export default Player;
