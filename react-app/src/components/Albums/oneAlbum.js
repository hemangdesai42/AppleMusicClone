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
        <div className="page_container">
        <div className='album_container'>
            <div className='album'>
                {albumInfo ? <div className='album_names'>{albumInfo['name']}</div> : null}
                {albumInfo ? <div><img className='one_coverart' src={albumInfo['imageUrl']} alt=''></img></div> : null}
                {artistInfo ? <div className='artist_name'>{(artistInfo[0])['name']}</div> : null}
            </div>
            </div>
            <table className='songs_container'>
                <tbody>
                {allSongs ? allSongs.map((song) => {
                    return (
                        <tr className='oneAlbum_items'>
                            <td className='songNames'>{song['name']}</td>
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