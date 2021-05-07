import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './nav.css'
import mango from '../store/mango-logo.png'

const NavBar = () => {
  return (
    <nav>
      <div>
        <img className='logo' src={mango}></img>
        <h1 className='music'>Music</h1>
        <div className='library'>Library
          <br></br>
          <NavLink to='/albums' className='albums'>Albums</NavLink>
          <br></br>
          <NavLink to='/artists' className='artists'>Artists</NavLink>
          <br></br>
          <NavLink to='/songs' className='songs'>Songs</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
