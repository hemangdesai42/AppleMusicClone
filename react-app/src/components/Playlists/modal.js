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
    const playlistId = useSelector(state => state.playlistReducer.playlist.id)

    const songs = data.songs
 

    const song_id = songs ? songs.map((song) => { return song.id; }): null
    console.log(song_id)

    // const [songId, setSongId] = useState(null)

    const add = (songId) => {
        console.log(songId, "---------------", playlistId)
        dispatch(addSong(playlistId, songId))
        // setSongId(null)
    }

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
                                <tr className='song_items2'>
                                    <svg onClick={add(song['id'])} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#cf6b28" className="addSong" viewBox="0 0 16 16">
                                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                                    </svg><td className='song_name2'>{song['name']}</td>
                                    <h9 className='song_artistName'>{song['artistName']}</h9>
                                </tr>
                            )
                        }) : null}
                    </table>
                </div>
            </div>
        </div>,
        modalNode
    );
}