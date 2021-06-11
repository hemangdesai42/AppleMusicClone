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
                                type="text"
                                placeholder="Playlist ImageUrl"
                                value={imageUrl}
                                onChange={updateImageUrl}
                            />
                            <button className='playlist_create' type="submit" onClick={create}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        modalNode
    );
}