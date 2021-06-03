import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import PlayButton from '../Player/playbutton'
import QueueButton from '../Player/addtoqueue'
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
        <div className='main_container'>
            <h1 className='mysongs'>My Songs</h1>
            <div className='line_song1'>_________________________________________________________________________________________________________________</div>
            <table className='songs_contain'>
            {songs ? songs.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map((song) => {
                return (
                    <tr className='song_items2'>
                        <td className='song_name2'>{song['name']}</td><PlayButton song={song}/><QueueButton song={song}/>
                    </tr>
                )
            }) : null}
            </table>
        </div>
    )

}

export default Songs;