import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { albumData } from '../../store/oneAlbum'

function Album() {
    const dispatch = useDispatch();
    const info = useSelector(state => state.albumReducer)
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            await dispatch(albumData(id))
        })();
    }, [dispatch]);



    return (
        <div className='album_container'>
            <h1>hello</h1>
        </div>
    )

}

export default Album;