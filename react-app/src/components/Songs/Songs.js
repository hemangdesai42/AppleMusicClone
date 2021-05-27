import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { songsData } from '../../store/song'
import './songs.css';

function Songs() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.songsReducer)
    const songs = data.songs
    console.log(songs)

    useEffect(() => {
        (async () => {
            await dispatch(songsData())
        })();
    }, [dispatch]);

    return (
        <div className='songs_container1'>
            <h1 className='title_song'>My Songs</h1>
            <div className='line_song'>_________________________________________________________________________________________________________________</div>
            {songs ? songs.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map((song) => {
                return (
                    <div className='song_items1'>
                        <div className='song_name1'>{song['name']}</div>
                        <br></br>
                        <br></br>
                    </div>
                )
            }) : null}
        </div>
    )

}

export default Songs;