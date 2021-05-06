import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { homeData } from '../../store/home'

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
        <div>
            {albumsData ? albumsData.map((album) => {
                return (
                    <div>
                        <h1>{album['name']}</h1>
                    </div>
                    ) 
                }) : null}
        </div>
    )

}

export default Home;