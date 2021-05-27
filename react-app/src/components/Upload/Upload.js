import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './upload.css'

const UploadMusic = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [songItself, setSongItself] = useState(null);
    const [songLoading, setSongLoading] = useState(false);
    const [name, setName] = useState('')
    const [artistName, setArtistName] = useState('')
    const [albumName, setAlbumName] = useState('')
    const [albumImage, setAlbumImage] = useState(null)
    const [artistImage, setArtistImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("songItself", songItself);
        formData.append("name", name);
        formData.append("artistName", artistName);
        formData.append("artistImage", artistImage);
        formData.append("albumName", albumName);
        formData.append("albumImage", albumImage);
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setSongLoading(true);

        const res = await fetch('/api/upload', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setSongLoading(false);
            history.push("/home");
        }
        else {
            setSongLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const updateSong = (e) => {
        const file = e.target.files[0];
        setSongItself(file);
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setAlbumImage(file);
    }

    const updateImage1 = (e) => {
        const file = e.target.files[0];
        setArtistImage(file);
    }

    return (
        <main>
            <div className='page'>
                <div className='upload'>
                    <form className='uploadForms' onSubmit={handleSubmit}>
                        <div className='title'>Upload a Song!</div>
                        <div className='inputs'>
                        <div><input
                            className='song'
                            type="file"
                            accept="song/*"
                            onChange={updateSong}
                        /></div>
                        <br></br>
                        <div>
                        <input
                            className='songName'
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /></div>
                        <br></br>
                        <div><input
                            className='artistArea'
                            type='text'
                            placeholder='Artist Name'
                            value={artistName}
                            onChange={(e) => setArtistName(e.target.value)}
                        /></div>
                        <br></br>
                        <div><input
                            className='artistImage1'
                            type="file"
                            accept="image/*"
                            onChange={updateImage1}
                        /></div>
                        <br></br>
                        <div><input
                            className='albumArea'
                            type='text'
                            placeholder='Album Title'
                            value={albumName}
                            onChange={(e) => setAlbumName(e.target.value)}
                        /></div>
                        <br></br>
                        <div><input
                            className='albumImage'
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                        /></div>
                        <button className='submit' type="submit">Submit</button>
                        {(songLoading) && <p>Loading...</p>}
                        </div>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default UploadMusic;