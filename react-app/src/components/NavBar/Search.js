import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './nav.css'
import mango from '../../store/mango-logo.png'
import { homeData } from '../../store/home'

const Search = ({ homeData}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.home)
    const [searchTerm, setSearchTerm] = useState('');
    const albumsData = data.albums
    const artistsData = data.artists
    const songsData = data.songs
    // only want to search for album name, artist name, song name, and playlist name (after first 3)
    console.log(albumsData, artistsData, songsData)



    useEffect(() => {
        (async () => {
            await dispatch(homeData())
        })();
    }, [dispatch]);


    return (
        <input className="search" type='text' placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
    );
}

export default Search;
