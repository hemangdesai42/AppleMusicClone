import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { playlistsData } from '../../store/playlist'

function Playlists() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.playlists)


    useEffect(() => {
        (async () => {
            await dispatch(playlistsData())
        })();
    }, [dispatch]);

    return (
        <div>
            <h1>hello</h1>
        </div>
    )

}

export default Playlists;