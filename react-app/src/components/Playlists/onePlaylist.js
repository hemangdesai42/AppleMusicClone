import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import { playlistData } from '../../store/onePlaylist'
import { addSongs } from '../../store/playlist'
import PlayButton from '../Player/playbutton'
import QueueButton from '../Player/addtoqueue'
import './onePlaylist.css'

function Playlist() {
    const history = useHistory();
    const dispatch = useDispatch();
    const info = useSelector(state => state.playlistReducer)
    const { id } = useParams();
    
    const playlistInfo = info['playlist']
    const songInfo = info['playlistSongs']
    console.log(songInfo)

    const onAdd = async () => {
        history.push("/songs")
    }

    useEffect(() => {
        (async () => {
            await dispatch(playlistData(id))
        })();
    }, [dispatch, id]);

    return (
        <div className="one_playlist">
            <div className='one_playlist_container'>
                <div className='playlistOne'>
                    {playlistInfo ? <div className='playlist__Name'>{playlistInfo['name']}<button onClick={onAdd}>Add Songs!<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#cf6b28" className="add_songs" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></button></div> : null}
                    {playlistInfo ? <div><img className='playlist_art' src={playlistInfo['imageUrl']} alt=''></img></div> : null}
                </div>
            </div>
            <table className='playlistSongs_contain'>
                <tbody>
                    {songInfo ? songInfo.map((song) => {
                        return (
                            <tr className='onePlaylist_items'>
                                <td className='playlistSong_name'>{song['name']}</td>
                                <PlayButton song={song} /><QueueButton song={song} />
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
    )

}

export default Playlist;