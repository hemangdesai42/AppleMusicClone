import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { artistsData } from '../../store/artist'
import './artists.css'

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
            <h1 className='artists_title'>My Artists</h1>
            <div className='line'>__________________________________________________________________________________________________________________________________________</div>
            {artists ? artists.slice(0).reverse().map((artist) => {
                return (
                    <div className='artist_items'>
                        <img className='artist_img' src={artist['imageUrl']}></img>
                        <br></br>
                        <div className='artist_name'>{artist['name']}</div>
                    </div>
                )
            }) : null}
        </div>
    )

}

export default Artists;