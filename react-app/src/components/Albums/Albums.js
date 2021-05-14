import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { albumsData } from '../../store/album'

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
        <div className='albums_container'>
            <h1 className='title_library'>Recently Added</h1>
            <div className='line_library'>_________________________________________________________________________________________________________________</div>
            {albums ? albums.map((album) => {
                return (
                    <div className='home_items'>
                        <div><img className='coverart' src={album['imageUrl']}></img></div>
                        <div className='name'>{album['name']}</div>
                    </div>
                )
            }) : null}
        </div>
    )

}

export default Albums;