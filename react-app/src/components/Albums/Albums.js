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
    
    // window.onscroll = function () { scrollFunction() };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 80) {
    //         document.getElementById("allalbum__title_container").style.fontSize = "0px";
    //     } else {
    //         document.getElementById("allalbum__title_container").style.fontSize = "40px";
    //     }
    // }

    

    return (
        <div id="allalbum__container">
            <div id="allalbum__title_container">
                <div id='allbum_library'>My Albums</div>
            </div>
        <div id='allbums__content'>
            <div id='allalbums'>
                {albums ? albums.slice(0).reverse().map((album) => {
                    return (
                        <div id='allbum_holder'>
                            <NavLink to={`/albums/${album['id']}`}><img id='allalbum__coverart' src={album['imageUrl']}></img></NavLink>
                            <div id='allalbum_name'>{album['name']}</div>
                        </div>
                    )
                }) : null}
            </div>
        </div>
        </div>
    )

}

export default Albums;