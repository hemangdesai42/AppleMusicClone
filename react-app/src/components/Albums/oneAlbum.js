import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { albumData } from '../../store/oneAlbum'
import './oneAlbum.css';

function Album() {
    const dispatch = useDispatch();
    const info = useSelector(state => state.albumReducer)
    const { id } = useParams();
    console.log(info)
    
    const albumInfo = info.album
    const allSongs = info.songs

    console.log(info ? info['album'] : null)



    useEffect(() => {
        (async () => {
            await dispatch(albumData(id))
        })();
    }, [dispatch, id]);



    return (
        <div className='album_container'>
            <div className='artwork'>
                {/* {for (const )} */}
            </div>
            <div className='songs'>
                {allSongs ? allSongs.map((song) => {
                    return (
                        <div className='oneAlbum_items'>
                            <h1 className='songNames'>{song['name']}</h1>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )

}

export default Album;