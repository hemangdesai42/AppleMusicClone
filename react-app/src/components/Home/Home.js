import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { homeData } from '../../store/home'
import './home.css'

function Home() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.home)
    const albumsData = data.albums
    
    console.log(data)
    console.log(albumsData ? albumsData[0] : null)
    
    useEffect(() => {
        (async () => {
            await dispatch(homeData())
        })();
    }, [dispatch]);
    
    return (
        <div className='albums_container'>
            {albumsData ? albumsData.map((album) => {
                return (
                    <div>
                        <div>{album['name']}</div>
                        <img className='coverart' src={album['imageUrl']}></img>
                    </div>
                    ) 
                }) : null}
        </div>
    )

}

export default Home;