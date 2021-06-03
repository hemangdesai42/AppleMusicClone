import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { songsData } from '../../store/song'
import { homeData } from '../../store/home'
import { currentSong, nextSong, previousSong, addToQueue } from '../../store/player'
import './player.css'

const Player = () => {
    const dispatch = useDispatch()
    const currentSong = useSelector(state => state.player.current)

    const player = document.getElementById('audioPlayer')

    useEffect(() => {
        if (currentSong.songItself && player) {
            player.play()
            console.log(player)
        }
        return () => {
            player && player.pause()
        }
    }, [player, currentSong.songItself])

    const play = () => {
        player.play()
    }

    const pause = () => {
        player.pause()
    }

    const next = () => {
        dispatch(nextSong())
    }

    const prev = () => {
        dispatch(previousSong())
    }


    return (
        <>
        <audio
        className='controls'
        id = "audioPlayer"
        controls
        src={currentSong.songItself}
        style={{display: "none"}}
        >
            Your browser does not support the
            <code>audio</code> element.
        </audio>
        <div className="audioPlayer">
            <button disabled={!player} onClick={play}>Play</button>
            <button disabled={!player} onClick={pause}>Pause</button>
            <button disabled={!player} onClick={next}>Next</button>
            <button disabled={!player} onClick={prev}>Previous</button>
        </div>
        </>
    );
}

export default Player;
