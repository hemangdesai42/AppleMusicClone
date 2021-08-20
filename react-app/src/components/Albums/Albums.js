import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { albumsData } from '../../store/album'
import './albums.css'
function Albums() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.albumsReducer)
    const albums = data.albums
    console.log(albums)

    useEffect(() => {
        (async () => {
            await dispatch(albumsData(data))
        })();
    }, [dispatch]);
    
    

    return (
        <div id='albums_container'>
            <h1 id='album_library'>My Albums</h1>
            <div id='albumline_library'>__________________________________________________________________________________________________________________________________________</div>
            {albums ? albums.slice(0).reverse().map((album) => {
                return (
                    <div id='album_holder'>
                        <NavLink to={`/albums/${album['id']}`}><img id='coverart1' src={album['imageUrl']}></img></NavLink>
                        <div id='album_name'>{album['name']}</div>
                    </div>
                )
            }) : null}
        </div>
    )

}

export default Albums;