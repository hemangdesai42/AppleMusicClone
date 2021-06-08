import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './nav.css'
import mango from '../../store/mango-logo.png'
import { homeData } from '../../store/home'

const NavBar = () => {
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
    <div className="nav">
      <div className='navbar'>
        <NavLink to='/home'><img className='logo' src={mango}></img>
          <h1 className='music'>Music</h1></NavLink>
        <div className='navigation_container'>
          <input className="search" type='text' placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
          <div className='library'>Library
            <br></br>
            <div className='albums'><Link to='/albums'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="#cf6b28" className="bi bi-stack" viewBox="0 0 16 16">
              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
            </svg> Albums</Link></div>
            <br></br>
            <div className='artists'><Link to='/artists'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="#cf6b28" className="bi bi-file-person" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
              <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg> Artists</Link></div>
            <br></br>
            <div className='songs'><Link to='/songs'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="#cf6b28" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
              <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
              <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
              <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
            </svg> Songs</Link></div>
            <br></br>
            <div className='playlists'><Link to='/playlists'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="#cf6b28" className="bi bi-music-note-list" viewBox="0 0 16 16">
              <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
              <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
              <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
              <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </svg> Playlists</Link></div>
            <br></br>
            <div className='upload'><Link to='/upload'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="#cf6b28" className="bi bi-upload" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
            </svg> Upload</Link></div>
            <br></br>
            <div><LogoutButton /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
