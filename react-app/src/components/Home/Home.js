import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { homeData } from '../../store/home'
import './home.css'

function Home() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.home)
    const albumsData = data.albums
    const artistsData = data.artists
    console.log(data)
    // console.log(albumsData ? albumsData[0] : null)
    console.log(data ? data['albums'] : null)

    useEffect(() => {
        (async () => {
            await dispatch(homeData())
        })();
    }, [dispatch]);

    // function artists(artistsData) {
    //         artistsData ? artistsData.map((artist) => {
    //             return (artist)
    //         }) : null
    // }
  
    return (
        <div className='albums_container'>
            <h1 className='title_library'>Recently Added</h1>
            <div className='line_library'>_________________________________________________________________________________________________________________________________</div>
            {albumsData ? albumsData.slice(0).reverse().map((album) => {
                return (
                    <div className='home_items'>
                        <NavLink to={`/albums/${album['id']}`}><img className='coverart' src={album['imageUrl']}></img></NavLink>
                        <div className='name'>{album['name']}</div>
                        
                    </div>
                    ) 
                }) : null}
        </div>
    )

}

export default Home;