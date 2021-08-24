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
        <div id='artists__container'>
        <div id="artists__title_container">
            <div id='artists__title'>Recently Added</div>
        </div>
            <div id="artists__contents">
                <div id='artists__main'>
                    {artists ? artists.slice(0).reverse().map((artist) => {
                        return (
                            <div id='artists_items'>
                                <img id='artists__img' src={artist['imageUrl']}></img>
                                <br></br>
                                <div id='artists__name'>{artist['name']}</div>
                            </div>
                        )
                    }) : null}
            </div>
        </div>
        </div>
    )

}

export default Artists;