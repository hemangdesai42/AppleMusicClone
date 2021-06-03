import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { createPlaylists } from '../../store/playlist'

function CreatePlaylist() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState(null);

    const create = async (e) => {
        e.preventDefault();
        const data = await dispatch(createPlaylists(name, imageUrl));
        if (data.errors) {
            setErrors(data.errors);
        }
    };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    return (
        <main>
            <div className='create_playlistcontainer'>
                <div className='playlist_title'>Create A Playlist!</div>
                <div className='playlist_form'>
                    <form onSubmit={create}>
                        <div>
                            {errors.map((error) => (
                                <div>{error}</div>
                            ))}
                        </div>
                        <div>
                            <input
                                className="playlist_name"
                                name="playlist_name"
                                type="text"
                                placeholder="Playlist Name"
                                value={name}
                                onChange={updateName}
                            />
                        </div>
                        <div>
                            <input
                                name="imageUrl"
                                type="file"
                                className='imageUrl_playlist'
                                placeholder="PLaylist ImageUrl"
                                value={imageUrl}
                                onChange={updateImageUrl}
                            />
                        </div>
                        <button className='playlist_create' type="submit" onClick={create}>Create</button> 
                    </form>
                </div>
            </div>
        </main>
    )

}

export default CreatePlaylist;