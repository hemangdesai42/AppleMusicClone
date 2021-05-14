import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { artistsData } from '../../store/artist'

function Artists() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.artistsReducer)
    const artists = data.artists
    console.log(artists)

    useEffect(() => {
        (async () => {
            await dispatch(artistsData())
        })();
    }, [dispatch]);

    return (
        <div className='artists_container'>
            <h1 className='artists_title'>Recently Added</h1>
            <div className='line'>_________________________________________________________________________________________________________________</div>
            {artists ? artists.map((artist) => {
                return (
                    <div className='artist_items'>
                        <div className='artist_bio'>{artist['bio']}</div>
                        <br></br>
                        <div className='artist_name'>{artist['name']}</div>
                    </div>
                )
            }) : null}
        </div>
    )

}

export default Artists;