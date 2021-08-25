import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PlayButton from '../Player/playbutton'
import QueueButton from '../Player/addtoqueue'
import { songsData } from '../../store/song'
import './songs.css';

function Songs() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.songsReducer)
    const songs = data.songs


    useEffect(() => {
        (async () => {
            await dispatch(songsData())
        })();
    }, [dispatch]);

    return (
        <div id='songs__page_container'>
            <div id="songs__title_container">
                <div id='songs__title'>My Songs</div>
            </div>
            <table id='songs__page_contain'>
                <tbody>
                    {songs ? songs.map((song) => {
                        return (
                            <tr id='song_items2'>
                                <td id='song__name'>{song['name']}</td>
                                <td id='song__artistName'>{song['artistName']}</td>
                                <PlayButton song={song} /><QueueButton song={song} />
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
    )

}

export default Songs;