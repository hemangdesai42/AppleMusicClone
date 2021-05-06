import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { albumsData } from '../../store/album'

function Albums() {
    const dispatch = useDispatch();
    let { username } = useParams();
    const data = useSelector(state => state.albums)


    useEffect(() => {
        (async () => {
            await dispatch(albumsData())
        })();
    }, [dispatch]);

    return (
        <div>
            <h1>hello</h1>
        </div>
    )

}

export default Albums;