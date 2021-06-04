import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { albumData } from '../../store/oneAlbum'
import PlayButton from '../Player/playbutton'
import QueueButton from '../Player/addtoqueue'
import './oneAlbum.css';

function Album() {
    const dispatch = useDispatch();
    const info = useSelector(state => state.albumReducer)
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
                </tbody>
            </table>
        </div>
    )

}

export default Album;