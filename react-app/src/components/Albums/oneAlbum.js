import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { albumData } from '../../store/oneAlbum'
import PlayButton from '../Player/playbutton'
import QueueButton from '../Player/addtoqueue'
import { songsData } from '../../store/song'
import './oneAlbum.css';

function Album() {
    const dispatch = useDispatch();
    const info = useSelector(state => state.albumReducer)
    const data = useSelector(state => state.songsReducer)
    const songs = data.songs
    const { id } = useParams();
    
    
    const albumInfo = info['album']
    const allSongs = info.songs
    const artistInfo = info['artists']

    console.log(artistInfo ? artistInfo : null)

    useEffect(() => {
        (async () => {
            await dispatch(albumData(id))
        })();
    }, [dispatch, id]);



    return (
        <div id="page__container">
        <div id='onealbum__container'>
            <div id='one__album'>
                {albumInfo ? <div id='onealbum__names'>{albumInfo['name']}</div> : null}
                {albumInfo ? <div><img id='one__coverart' src={albumInfo['imageUrl']} alt=''></img></div> : null}
                {artistInfo ? <div id='oneartist__name'>{(artistInfo[0])['name']}</div> : null}
            </div>
            </div>
            <table id='songs_container'>
                <tbody>
                {allSongs ? allSongs.map((song) => {
                    return (
                        <tr id='oneAlbum__items'>
                            <td id='song__names'>{song['name']}</td>
                            <PlayButton song={song}/><QueueButton song={song}/>
                        </tr>
                    )
                }) : null}
                </tbody>
            </table>
        </div>
    )

}

export default Album;