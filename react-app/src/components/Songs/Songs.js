import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { songsData } from '../../store/song'

function Songs() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.songs)


    useEffect(() => {
        (async () => {
            await dispatch(songsData())
        })();
    }, [dispatch]);

    return (
        <div>
            <h1>hello</h1>
        </div>
    )

}

export default Songs;