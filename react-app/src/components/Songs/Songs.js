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
        <main>
        <div className='songs_container'>
            <h1 className='title_song'>Recently Added</h1>
            <div className='line_song'>_________________________________________________________________________________________________________________</div>
            {songs ? songs.map((song) => {
                return (
                    <div className='song_container'>
                    <div className='song_name'>{song['name']}</div>
                    </div>
                )
            }) : null}
        </div>
        </main>
    )

}

export default Songs;