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
        <div className='main_container'>
            <h1 className='mysongs'>My Songs</h1>
            <div className='line_song1'>_________________________________________________________________________________________________________________</div>
            <table className='songs_contain'>
            {songs ? songs.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map((song) => {
                return (
                    <tr className='song_items2'>
                        <td className='song_name2'>{song['name']}</td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#cf6b28" className="play" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#cf6b28" class="plus" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </tr>
                )
            }) : null}
            </table>
        </div>
    )

}

export default Songs;