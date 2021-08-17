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

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            document.getElementById("title__library").style.fontSize = "0px";
        } else {
            document.getElementById("title__library").style.fontSize = "30px";
        }
    }
  
    return (
        <div>
        <div id='title__library'>Recently Added</div>
        <div className='homepage_albums_container' id='homepage_albums'>
            {/* <div className='line_library'>_______________________________________________________________________________________________________________________________________________</div> */}
            {albumsData ? albumsData.slice(0).reverse().map((album) => {
                return (
                    <div id='homepage__items'>
                        <NavLink to={`/albums/${album['id']}`}><img className='homepage__coverart' src={album['imageUrl']}></img></NavLink>
                        <div className='homepage__names'>{album['name']}</div>
                        
                    </div>
                    ) 
                }) : null}
        </div>
        </div>
    )

}

export default Home;