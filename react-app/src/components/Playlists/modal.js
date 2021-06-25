import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { songsData } from '../../store/song'
import AddButton from './addtoplaylist'
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
    const songs = data.songs


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
                        {songs ? songs.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map((song) => {
                            return (
                                <tr className='song_items2'>
                                    <AddButton /><td className='song_name2'>{song['name']}</td>
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