import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import { Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylists } from '../store/playlist'

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
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
export function Modal({ onClose, children }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState(null);

     useEffect(() => {
        (async () => {
            await dispatch(createPlaylists())
        })();
    }, [dispatch]);

    const create = async (e) => {
        e.preventDefault();
        const data = await dispatch(createPlaylists(name, imageUrl));
        if (data.errors) {
            setErrors(data.errors);
        }
    };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-background" onClick={onClose} />
            <div className="modal-content">
                {children}
                <div className='create_playlistcontainer'>
                    <div className='mplaylist_title'>Create A Playlist!</div>
                    <div className='mplaylist_form'>
                        <form onSubmit={create}>
                            <div>
                                {errors.map((error) => (
                                    <div>{error}</div>
                                ))}
                            </div>
                            <input
                                className="mplaylist_name"
                                name="playlist_name"
                                type="text"
                                placeholder="Playlist Name"
                                value={name}
                                onChange={updateName}
                            />
                            <input
                                className="mplaylist_imageUrl"
                                name="playlist_imageUrl"
                                id='playlist_imageUrl'
                                type="file"
                                placeholder="Playlist ImageUrl"
                                value={imageUrl}
                                onChange={updateImageUrl}
                            /><label className='mplaylist_imageup' htmlFor="playlist_imageUrl">Choose an Image&emsp;&emsp;&emsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1f1f1f" className="upload1" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg></label>
                            <button className='playlist_create' type="submit" onClick={create}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        modalNode
    );
}