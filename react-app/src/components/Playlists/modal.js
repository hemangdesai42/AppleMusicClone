import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { songsData } from '../../store/song'
import { addSong } from '../../store/addPlaylistsong'
import './modal.css';

const ModalContext = React.createContext();

export function ModalProvider2({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();
    useEffect(() => {
        setValue(modalRef.current);
    }, [])
    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}
export function SongModal({ onClose, children }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.songsReducer)
    const playlist_id = useSelector(state => state.playlistReducer.playlist.id)
    const [song_id, setSongId] = useState(null);
    // const [playlist_id, setPlaylistId] = useState(null);
    const [errors, setErrors] = useState([]);
    const songs = data.songs
 
    // const song_id = songs ? songs.map((song) => { return song.id; }): null
    // console.log(song_id)

    // // const [songId, setSongId] = useState(null)

    // const add = (songId) => {
    //     console.log(songId, "---------------", playlistId)
    //     dispatch(addSong(playlistId, songId))
    //     // setSongId(null)
    // }
    
    useEffect(() => {
        (async () => {
            await dispatch(addSong())
        })();
    }, [dispatch]);
    
    const add = async () => {
        // e.preventDefault();
        const data = await dispatch(addSong(playlist_id, song_id))
        setSongId(song_id)
        console.log(song_id,"---------------",playlist_id)
        if (data.errors) {
            setErrors(data.errors);
        }
        // setSongId(null)
    };
    
    // const addSong = () => {
    //     setSongId(song_id)
    // }

    // const addPlaylist = () => {
    //     setPlaylistId(playlist_id);
    // }

    useEffect(() => {
        (async () => {
            await dispatch(songsData())
        })();
    }, [dispatch]);

    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;


    return ReactDOM.createPortal(
        <div className="songModal">
            <div className="songModal-background" onClick={onClose} />
            <div className="songModal-content">
                {children}
                <div className='songsModal_contain'>
                    <table className='songsModal_contain1'>
                        {songs ? songs.map((song) => {
                            return (
                                <tbody className='song_items2'>
                                    <td className='song_name2'><svg onSubmit={add()} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#cf6b28" className="addSong" viewBox="0 0 16 16" >
                                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                                    </svg>{song['name']}</td>
                                    <div className='song_artistName'>{song['artistName']}</div>
                                </tbody>
                            )
                        }) : null}
                    </table>
                </div>
            </div>
        </div>,
        modalNode
    );
}