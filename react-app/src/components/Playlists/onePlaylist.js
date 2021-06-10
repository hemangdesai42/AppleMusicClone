import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { playlistData } from '../../store/onePlaylist'
import PlayButton from '../Player/playbutton'
import QueueButton from '../Player/addtoqueue'
import './onePlaylist.css'

function Playlist() {
    const dispatch = useDispatch();
    const info = useSelector(state => state.playlistReducer)
    const { id } = useParams();
    
    const playlistInfo = info['playlist']
    const songInfo = info['playlistSongs']
    console.log(songInfo)

    useEffect(() => {
        (async () => {
            await dispatch(playlistData(id))
        })();
    }, [dispatch, id]);

    return (
        <div className="one_playlist">
            <div className='one_playlist_container'>
                <div className='playlistOne'>
                    {playlistInfo ? <div className='playlist__Name'>{playlistInfo['name']}</div> : null}
                    {playlistInfo ? <div><img className='playlist_art' src={playlistInfo['imageUrl']} alt=''></img></div> : null}
                </div>
                <button>Add Songs</button>
            </div>
            {/* <table className='playlistSongs_contain'>
                <tbody>
                    {allSongs ? allSongs.map((song) => {
                        return (
                            <tr className='onePlaylist_items'>
                                <td className='playlistSong_name'>{song['name']}</td>
                                <PlayButton song={song} /><QueueButton song={song} />
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table> */}
        </div>
    )

}

export default Playlist;