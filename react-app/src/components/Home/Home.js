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

    useEffect(() => {
        (async () => {
            await dispatch(homeData())
        })();
    }, [dispatch]);
  
    return (
        <div>
        <div id='title_library'>Recently Added</div>
        <div className='homepage_albums_container' id='homepage_albums'>
            {/* <div className='line_library'>_______________________________________________________________________________________________________________________________________________</div> */}
            {albumsData ? albumsData.slice(0).reverse().map((album) => {
                return (
                    <div className='home_items'>
                        <NavLink to={`/albums/${album['id']}`}><img className='coverart' src={album['imageUrl']}></img></NavLink>
                        <div className='name2'>{album['name']}</div>
                        
                    </div>
                    ) 
                }) : null}
        </div>
        </div>
    )

}

export default Home;