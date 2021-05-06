import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { artistsData } from '../../store/artist'

function Artists() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.artists)


    useEffect(() => {
        (async () => {
            await dispatch(artistsData())
        })();
    }, [dispatch]);

    return (
        <div>
            <h1>hello</h1>
        </div>
    )

}

export default Artists;