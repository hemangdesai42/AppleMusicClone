import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { playlistData } from '../../store/onePlaylist'
import PlayButton from '../Player/playbutton'
import QueueButton from '../Player/addtoqueue'
import { songsData } from '../../store/song'

function Playlist() {
    const dispatch = useDispatch();
    const info = useSelector(state => state.playlistReducer)
    // const data = useSelector(state => state.songsReducer)
    // const songs = data.songs
    const { id } = useParams();
    
    console.log(info)

    useEffect(() => {
        (async () => {
            await dispatch(playlistData(id))
        })();
    }, [dispatch, id]);



    return (
        <div></div>
    )

}

export default Playlist;