import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { playlistsData } from '../../store/playlist'
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist'
import { Modal } from "../../context/modal"
import './playlist.css'

function Playlists() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.playlists)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(playlistsData())
        })();
    }, [dispatch]);

    return (
        <div>
            <button className="createPlaylist" onClick={() => setShowModal(true)}>foisihfjjblkfjkslbjf</button>
            {showModal && (<Modal onClose={() => setShowModal(false)}>
                <CreatePlaylist/>
            </Modal>)}
        </div>
    )

}

export default Playlists;